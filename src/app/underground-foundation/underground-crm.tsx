import type { Metadata } from "next";
import Link from "next/link";
import { Main, Section, MediaCard, Prose, Lead } from "@/components/Page";

// Merged with the defaults in layout.tsx; sets the browser-tab title and search snippet for this page
export const metadata: Metadata = {
  title: "Underground Foundation",
  description: "The Underground Foundation builds open-source tools for underground and grassroots political movements.",
};

export default function UndergroundFoundation() {
  return (
    <Main>
      <p><Link href="/">← Back home</Link></p>

      <Section id="foundation" title="Underground Foundation" level={1}>
        <MediaCard image="/images/wombat.webp" imageAlt="The wombat mascot for the Underground Foundation">
          <Prose>
            <Lead>
              Underground CRM is an open-source Django application that provides the core functionality for a grassroots
              movement:
            </Lead>
            <ul>
              <li>Customer-Relationship Management (CRM) − a database of members and their activity</li>
              <li>A Content-Management System (CMS) − rich-text editing for web pages</li>
              <li>Bulk emails, using <Link href="https://www.smtp2go.com/" rel="nofollow">SMTP2Go</Link></li>
            </ul>
            <p>
              The <Link href="https://www.fusionparty.org.au">Fusion Party</Link> has signed up as the flagship client
              for the software, and has now seen its biggest operating expense go from <code>$300 AUD / month</code> to
              <code>$23.86 / month</code>, <b>a cost reduction of 92%</b>.
            </p>
            <p>
              During the migration, all payments were successfully migrated from NationBuilder to a new Stripe account
              without donors needing to recreate their monthly commitments.
            </p>
            <p>
              All pages were migrated and most were reconstructed using Wagtail blocks, so even Fusion's most customised
              HTML can now be edited with rich text and accurate, canonical previews for how it will look on mobile,
              tablet and desktop:
            </p>
            <p>
              <!-- todo: Claude, I want the three images here, each with a caption: /images/underground-crm/… -->
            </p>
            <p>
              Since users couldn't be migrated with their passwords (NationBuilder does not expose the hashes used for
              passwords), it could have been a lot of friction for users to reset their passwords, but by building on
              Django, we could use OAuth,
            </p>
            <p>
              These organisations providing the core services might have been not-for-profit, but they weren't for loss
              either. The most obvious proof is the fact that their source code is not publicly available. They're
              locking in their customers just like any other profit-driven company, and the fact that their source
              code wasn't publicly available meant that whenever we ran into limitations of the platform, we just had
              to suck it up − we couldn't change it.
            </p>
            <p>

            </p>
            <p>
              Sure, <Link href="https://nationbuilder.com/" rel="nofollow">NationBuilder</Link> offers an API, but it
              only does limited actions. This is presumably a way to push subscribers into NationBuilder's own
              <Link href="https://nationbuilder.com/automations" rel="nofollow">Automations</Link>.
            </p>
            <p>
              There were various "open-source" options out there too, but many of these ended up being a freemium model,
              so we'd still be vulnerable to lock-in and

            </p>
          </Prose>
        </MediaCard>
      </Section>
    </Main>
  );
}
