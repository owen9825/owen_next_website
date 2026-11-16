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
              The <Link href="https://github.com/Underground-Foundation">Underground Foundation</Link> creates software
              for helping underground &amp; grassroots movements.
            </Lead>
            <p>
              While involved with the <Link href={"https://www.fusionparty.org.au/"}>Fusion Party</Link>, it became
              apparent that political parties were having to reinvent a lot of the same tooling and processes as each
              other, and make do with core software that was costly and difficult in its own way, even if it was
              provided by a non-profit.
            </p>
            <p>
              We were already fans of the open-source community and the
              <Link href={"https://en.wikipedia.org/wiki/G0v_movement"}>g0v movement</Link>, which is making use of
              open-source contributions for the running of government. So it was an obvious decision that in sorting out
              our CMS (Content-Management System) software, I would lean on open-source projects and make a lot of our
              own work open-source too. This is how the Underground Foundation and our first project
              (<Link href={"underground-crm"}>Underground CRM</Link>) were born.
            </p>

            <h2>Projects</h2>
            <ul>
              <li>
                <Link href="underground-crm">underground-crm</Link>: an
                open-source Django application that gives political movements a CRM for keeping track of members; and
                rich-text editing of web pages and email. Very comparable to NationBuilder, but open-source and much
                lower cost.
              </li>
              <li>
                <Link href="https://github.com/Underground-Foundation/underground-ballots">underground-ballots</Link>:
                software for ranking candidates in an electorate and rendering how-to-vote PDFs.
              </li>
            </ul>
          </Prose>
        </MediaCard>
      </Section>
    </Main>
  );
}
