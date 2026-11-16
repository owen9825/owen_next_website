#!/usr/bin/env bash
# Build the static site and publish it to S3 behind CloudFront.
#
#   npm run deploy            # build, upload, invalidate the CloudFront cache
#   npm run deploy -- --dryrun  # show what would be uploaded, change nothing
#
# Credentials come from the AWS profile (default: "owen" in ~/.aws/credentials);
# override with AWS_PROFILE, S3_BUCKET or CLOUDFRONT_DISTRIBUTION_ID.
set -euo pipefail

export AWS_PROFILE="${AWS_PROFILE:-owen}"
BUCKET="${S3_BUCKET:-owen-next-website}"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E27PB7P9TJXBYR}"
DRYRUN="${1:-}"

cd "$(dirname "$0")/.."

NEXT_DIST_DIR=out npm run build

# Next's hashed assets never change once built, so browsers may cache them forever
aws s3 sync out/_next "s3://$BUCKET/_next" $DRYRUN \
  --cache-control "public, max-age=31536000, immutable"

# Everything else (HTML, images, videos) can change between deploys.
# --delete removes files that are no longer in the build; old _next assets are
# kept for a while, since a cached page may still be pointing at them.
aws s3 sync out "s3://$BUCKET" $DRYRUN --delete \
  --exclude "_next/*" \
  --cache-control "public, max-age=300"

if [ "$DRYRUN" = "--dryrun" ]; then
  echo "Dry run: skipped CloudFront invalidation"
  exit 0
fi

aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" \
  --query 'Invalidation.{Id:Id,Status:Status}' --output text

echo "Deployed to s3://$BUCKET; CloudFront is clearing its cache (takes a minute or two)"
