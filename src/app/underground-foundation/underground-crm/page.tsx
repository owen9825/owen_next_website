import type { Metadata } from "next";
import Link from "next/link";
import { Main, Section, Card, Prose, Lead, Screenshots, Screenshot, FramedImage } from "@/components/Page";

// Merged with the defaults in layout.tsx; sets the browser-tab title and search snippet for this page
export const metadata: Metadata = {
  title: "Underground Foundation",
  description: "The Underground Foundation builds open-source tools for underground and grassroots political movements.",
};

export default function UndergroundFoundation() {
  return (
    <Main>
      <Section id="foundation" title="Underground CRM" level={1}
               breadcrumbs={[
                 {label: "Home", href: "/"},
                 {label: "Underground Foundation", href: "/underground-foundation"},
                 {label: "Underground CRM"},
               ]}
      >
        <Card>
          <Prose>
            <FramedImage
              src="/images/underground-crm/underground-crm-repo.webp"
              alt="The underground-crm repository on GitHub: public, with 2 forks and 5 stars"
              href="https://github.com/Underground-Foundation/underground-crm"
              width={520}
            />
            <Lead>
              Underground CRM is an open-source Django application that provides the core functionality for a grassroots
              movement:
            </Lead>
            <ul>
              <li>A database of members and their activity (<a title={"Customer-Relationship Management"}
                                                               href={"#"}>CRM</a>)
              </li>
              <li>Rich-text editing for web pages (<a href={"#"} title={"Content-Management System"}>CMS</a>)</li>
              <li>Bulk emails using <Link href="https://www.smtp2go.com/" rel="nofollow">SMTP2Go</Link></li>
            </ul>
            <p>
              The <Link href="https://www.fusionparty.org.au">Fusion Party</Link> has signed up as the flagship client
              for the software, and has now seen its biggest operating expense go
              from <code>$300</code> / month to <code>$23.86</code> / month, <b>a cost reduction of 92%</b>.
            </p>
            <p>
              During the migration, all payments were successfully migrated from NationBuilder to a
              new <Link rel="nofollow" href="https://stripe.com">Stripe</Link> account
              without donors needing to recreate their monthly commitments.
            </p>
            <p>
              All pages were migrated and most were reconstructed
              using <Link href={"https://wagtail.org/"}>Wagtail</Link> blocks, so even Fusion's most customised
              HTML can now be edited with rich text and accurate, canonical previews for how it will look on mobile,
              tablet and desktop:
            </p>
            <Screenshots>
              <Screenshot
                src="/images/underground-crm/editing_block.webp"
                alt="The Wagtail editor for a 'Video with Side Text' block, with fields for the video URL, rich text and underline colour"
                caption="Editing a block: plain form fields and rich text, no fiddling with raw HTML."
              />
              <Screenshot
                src="/images/underground-crm/previewed_block.webp"
                alt="The editor's live preview panel showing the same block at mobile size, with buttons to switch to tablet and desktop"
                caption="The live preview, switchable between mobile, tablet and desktop."
              />
            </Screenshots>
            <p>
              Since users couldn't be migrated with their passwords, it could have been a lot of friction for users to
              reset their passwords, but by building on top of <Link href={"https://www.djangoproject.com/"}>Django</Link>, we
              could use <Link href={"https://oauth.net/2/"}>OAuth</Link> and provide three common
              options.
            </p>
            <Screenshots>
              <Screenshot src="/images/underground-crm/login_screen.webp"
                          alt="The login screen"
                          caption="The login screen with three OAuth options"
                          width={400}/>
            </Screenshots>
            <p>
              Offering users the option of OAuth also meant we could get a profile picture, which is very handy for
              remembering who's who when reaching out to our members.
            </p>
            <Screenshots>
              <Screenshot src="/images/underground-crm/profile_photo.webp"
                          alt="The photos in a person's profile"
                          caption="Profile photos available for staff to see"
                          width={400}/>
            </Screenshots>
            <p>
              Notice too that the admin panels
              support <Link href={"https://developer.mozilla.org/en-US/docs/Glossary/Internationalization"}>internationalisation</Link> − I
              don't wish for the spread of this software to be limited to English-speaking places.
            </p>
            <p>
              Although the application currently seems very similar to NationBuilder, it should be mentioned that
              design decisions are already supporting the option of running things in
              a <Link href={"https://en.wikipedia.org/wiki/Federation_(information_technology)"}>federated</Link> way,
              so that a grassroots movement might have cells around a country, with each only holding a subset of
              member records.
            </p>
            <Screenshots>
              <Screenshot
                src="/images/underground-crm/ant_hills.webp"
                alt="Separate colonies"
                caption="Separate colonies of ants"
              />
            </Screenshots>
            <p>
              Most of our objects
              use <Link href={"https://en.wikipedia.org/wiki/Universally_unique_identifier"}>UUIDs</Link> so that
              merging two cells together is unlikely to result in conflicts. We
              are also supporting the notion of Feed Pages that normally render as HTML, but which are also available
              as <Link href={"https://en.wikipedia.org/wiki/RSS"}>RSS</Link> feeds. Underground CRM instances can then
              subscribe to the RSS feed from another instance and publish those events or blog posts alongside their
              own.
            </p>
            <p>
              For organisations worried about having their membership disrupted, it's also worth mentioning that the
              system has been designed to be minimally reliant on <i>Big Tech</i>. The Fusion Party's application is
              running on a single EC2 instance in AWS, although considering that
              this <Link rel="nofollow" href="https://aws.amazon.com/ec2/instance-types/t4/">t4g.medium</Link> instance
              only has <code>4</code>GiB of memory and <code>2</code> vCPUs, it could realistically be replaced by
              a <Link href="https://www.raspberrypi.com/">Raspberry Pi</Link> with
              a <Link rel="nofollow" href="https://www.telstra.com.au/support/internet-and-home-phone/ip-address">static
              IP address</Link> or a <Link href="https://developers.cloudflare.com/tunnel/">Cloudflare Tunnel</Link>.
            </p>
            <p>
              The Fusion Party installation is using Cloudflare for
              its <Link href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/">CDN</Link> and its object storage
              (<Link href="https://www.cloudflare.com/products/r2/">R2</Link>), but these services are not strictly
              necessary, they just result in performance improvements. If we had a static IP address and a self-hosted
              web application, the objects (images, JavaScript etc) could be served from the local file system, and the
              lack of a CDN would just mean that the pages take a bit longer to load. If the delay was deemed
              unacceptable, the public-facing pages for a political party are rarely changed, so they could
              realistically be pre-built as static pages
              using <Link href="https://pypi.org/project/wagtail-bakery/">wagtail-bakery</Link>.
            </p>
            <Screenshot src={"/images/architecture.webp"} alt={"An architecture diagram for Underground CRM"}
                        caption={"The architecture of Underground CRM as deployed for fusionparty.org.au"}/>
            <p>
              Framing the public pages as potentially static is how I achieved the loading times of
              ~200ms (<Link href="https://web.dev/articles/fcp">FCP</Link>) for the Fusion website −
              I'm using <Link href="https://jasonformat.com/islands-architecture/">React Islands</Link>, a pattern
              where the pages have placeholder <i>islands</i> that are rendered lazily on the client side, each with
              their own React root.
            </p>
            <p>
              You'll notice that these islands don't appear in
              the <Link href="https://github.com/Underground-Foundation/underground-crm/">underground-crm</Link> repository −
              that repository holds all the logic for generic political parties, then the idea is that
              each specific organisation will have their own repository that implements a style and a deployment setup.
              For the Fusion Party, this is my private
              repository <Link href="https://github.com/owen9825/fusion-underground">fusion-underground</Link>.
            </p>
            <h2>
              Where Underground CRM is Suitable
            </h2>
            <p>
              Targeting grassroots organisations has a few impacts on the design of the application:
            </p>
            <ul>
              <li>Political groups have a blurry line between fans, members and staff. This means that
                underground-crm is getting a permission model that allows a user to see only specific user records,
                or to modify only specific web pages. Permissions would typically apply to <i>all records</i> or
                <i>all pages</i>, so you might not need the extra complexity here.
              </li>
              <li>
                The application has been architected around keeping costs <i>very low</i>. For instance, we're
                running our own <Link href="https://github.com/mountain-pass/addressr">Addressr</Link> instance for
                geocoding Australian addresses, and updating it every 3 months when the government releases new postal
                address data.
              </li>
              <li>
                <p>
                  Going with Underground CRM, your organisation will need at least one technical person, or you'd need
                  to be open to hiring someone like myself to occasionally update things for you (
                  <Link href="/#contact">I am open to this</Link>).
                  If you decide that you must absolutely avoid anything technical, then you might prefer
                  a <Link href="https://cloud.google.com/discover/what-is-no-code?hl=en">no-code</Link> option, but
                  keep in mind that <i>if you ever do</i> end up getting a technical person, they
                  will <Link href="https://news.ycombinator.com/item?id=22033827"><i>hate</i> having to work with a
                  "no-code" setup</Link>.
                </p>
                <blockquote>
                  "No code" is just someone else's code that you have no control
                  over − <Link href="https://www.reddit.com/r/programming/s/v6ZkNBpe7W">OnlyForF1</Link>
                </blockquote>
              </li>
              <li>
                <p>The application is suitable for self-hosting as much as possible. If you are worried about a
                  service provider accessing or leaking your membership database, Underground CRM is for you.
                </p>
                <p><b>If
                  you're worried about being locked in by a service provider; rug-pulled by a service provider; or
                  shut down by a government; then Underground CRM is for you.</b>
                </p>
                <p>
                  If you're not worried about a big subscription fee or you don't think you'll ever have
                  enemies, then you have more options for your CRM, some of which have fancy AI built in.
                </p>
              </li>
              <li>
                <p>
                  We use <Link href="https://docs.djangoproject.com/en/6.0/topics/templates/">Django's Jinja2
                  templates</Link> and rely on them being committed to the repository rather than edited online. It's
                  presumed that templates would change rarely and there might be multiple templates being changed
                  at the same time, to revise the site-wide style.
                </p>
                <p>
                  Your organisation might be more accustomed
                  to <Link href="https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage">JSX
                  components</Link> as
                  opposed to Jinja2 templates − professional front-end engineers would probably lean towards
                  components, whereas back-end engineers or non-engineers would probably find template files more
                  intuitive.
                </p>
                <p>
                  If you don't wish to use the built-in templates, you can
                  use <Link href="https://wagtail.org/headless/">Wagtail's headless mode</Link>, whereby your
                  page is transmitted as a JSON blob and then rendered by some other "head",
                  eg <Link href="https://astro.build/">Astro</Link>.
                </p>
              </li>
              <li>
                We don't have a style library − the project has initially been aimed at replacing the Fusion Party's
                reliance on NationBuilder, so we simply migrated the existing styling into Django. You'll see we've
                implemented plenty of tools for migrating away from NationBuilder, but if you're getting started on
                Underground CRM as the first CRM for your organisation, then you'll have to define your own CSS to
                make the site look respectable.
              </li>
              <li>
                You need to sort out your own deployment; we do not offer hosting. That said, I am available for
                contracting and I am willing to work on retainer, jumping in to perform maintenance or bug-fixes when
                needed. I am not going to limit my services just to allies of the Fusion Party.
              </li>
            </ul>
            <p>
              So, the perfect scenario for Underground CRM is an organisation that's already using NationBuilder and is
              happy with its existing styles, but wants to move to something that has a much lower operating cost,
              and functionality that's better suited to Australian electorates.
            </p>
            <p>
              As more clients switch over to Underground CRM, the community of possible contributors grows, so you'll
              see a growing pace for improvements. I switched Fusion over when I felt it had reached
              the <Link href="https://en.wikipedia.org/wiki/Minimum_viable_product">MVP</Link> stage, and now we're at
              the stage of making things even better than NationBuilder.
            </p>
            <p>
              The measure of success will not just be in the operating costs or the page-load speeds, but in an
              organisation's ability to onboard more members as contributors, which will in turn help to gain more
              members and more influence.
            </p>
            <p>
              If you'd like my services in onboarding you to Underground CRM, then <Link href="/#contact">reach out!</Link>
            </p>
            <Screenshot
                src="/images/underground-crm/Owen_and_Kieran.webp"
                alt="Owen and a volunteer during the 2023 Aston federal by-election"
                caption="Campaigning with a fellow believer during the 2023 Aston by-election"
              />
          </Prose>
        </Card>
      </Section>
    </Main>
  );
}
