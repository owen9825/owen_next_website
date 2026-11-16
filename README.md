# Owen Next Website
This project represents my personal site, served at https://owen.engineer. It replaces the older Jekyll site in `../owen_website`, and is deployed in a similar way: as static files in an S3 bucket, behind CloudFront.

It is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), based on https://dev.to/malvinjay/building-a-static-blog-with-nextjs-of6.

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Pages live under `src/`, and auto-update as you edit them.

## Building

[`next.config.ts`](./next.config.ts) sets `output: "export"`, so `next build` produces a fully static site, with no Node server needed:

* `trailingSlash: true` emits each page as `about/index.html`, so the S3 website endpoint can serve `/about/`.
* `images: { unoptimized: true }`, since there's no image optimisation server on S3.
* The build goes to `.next` by default; the deploy script sets `NEXT_DIST_DIR=out`, so a deploy doesn't clobber a running `next dev`.

To check the static output locally:

```bash
NEXT_DIST_DIR=out npm run build
python3 -m http.server --directory out 8000
```

## Deploying

```bash
npm run deploy               # build, upload to S3, invalidate CloudFront
npm run deploy -- --dryrun   # show what would be uploaded, change nothing
```

[`scripts/deploy.sh`](./scripts/deploy.sh):
1. Builds the static site into `out/`.
2. Syncs `out/_next` (hashed, immutable assets) to S3 with a one-year cache lifetime.
3. Syncs everything else with a 5-minute cache lifetime, deleting files that are no longer in the build. Old `_next` assets are kept, since cached pages may still refer to them.
4. Invalidates the CloudFront cache (`/*`).

It needs the [AWS CLI](https://aws.amazon.com/cli/), with credentials in the `owen` profile of `~/.aws/credentials`. Override the defaults with these environment variables:

| Variable | Default |
| --- | --- |
| `AWS_PROFILE` | `owen` |
| `S3_BUCKET` | `owen-next-website` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `E27PB7P9TJXBYR` |

### AWS setup
This is a one-time setup. The site has its own bucket, `owen-next-website`, and the existing CloudFront distribution's origin was revised to point at it, replacing the old site's `owen.engineer` bucket:

* In the S3 console, open the bucket's properties and enable static website hosting, with `index.html` as the index document.
* Set the bucket policy to allow public reads.
* For CloudFront's origin, enter the URL of the S3 **website** endpoint (e.g. `<bucket>.s3-website-us-east-1.amazonaws.com`); **don't pick the S3 bucket from the suggested list**, and don't restrict bucket access. Otherwise, visitors would need `/about/index.html` rather than `/about/`.
* Point the domain's DNS records at the CloudFront distribution.

### After deploying
* Changes are visible at the S3 website endpoint first, then at https://owen.engineer once the CloudFront invalidation finishes (a minute or two).
* Check the S3 website for broken links before relying on the live domain.
* Maybe [ask Google to re-analyse the sitemap](https://search.google.com/search-console/sitemaps?resource_id=sc-domain%3Aowen.engineer).
