import Footer from "@/components/Footer";
import Ether from "@/components/Ether";
import SphereClouds from "@/components/SphereClouds";
import Charm from "@/components/Charm";
import Script from "next/script";
import s from './styles.module.scss';

// The contact form posts to Kwes (kwes.io); these are the same IDs the old Jekyll site used
const KWES_FORM_ID = "l6IzI5rwtjzTd6GFvc9F";
const RECAPTCHA_SITE_KEY = "6LfHjr0bAAAAAGZE_F4hiMIo3nik5dTeg7frac80";
// https://dev.to/xandemon/developer-icons-an-awesome-open-source-library-for-free-tech-logos-299p
import { ClaudeAI, DeepSeek, Gemini, Python, Django, Java, Go, JavaScript, React as ReactIcon, Solidity, Docker, MySQL, PostgreSQL, Redis, Elastic, Cloudflare, AWS, Ubuntu, GitHubDark } from "developer-icons";

const socials = [
  { name: "GitHub", icon: "github", url: "https://www.github.com/owen9825" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/owen-miller-12112273/" },
  { name: "Stack Overflow", icon: "stack-overflow", url: "https://stackoverflow.com/users/1495729/kokociel" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/owenfm_/" },
  { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/owen.miller.986" },
  { name: "Spotify", icon: "spotify", url: "https://open.spotify.com/user/12140765598" },
];

const technologies = [
  { name: "Claude", Icon: ClaudeAI, url: "https://claude.ai" },
  { name: "DeepSeek", Icon: DeepSeek, url: "https://www.deepseek.com" },
  { name: "Gemini", Icon: Gemini, url: "https://gemini.google.com" },
  { name: "Python", Icon: Python, url: "https://www.python.org" },
  { name: "Django", Icon: Django, url: "https://www.djangoproject.com" },
  { name: "Java", Icon: Java, url: "https://dev.java" },
  { name: "Go", Icon: Go, url: "https://go.dev" },
  { name: "Solidity", Icon: Solidity, url: "https://soliditylang.org" },
  { name: "JavaScript", Icon: JavaScript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", Icon: ReactIcon, url: "https://react.dev" },
  { name: "Docker", Icon: Docker, url: "https://www.docker.com" },
  { name: "MySQL", Icon: MySQL, url: "https://www.mysql.com" },
  { name: "PostgreSQL", Icon: PostgreSQL, url: "https://www.postgresql.org" },
  { name: "Redis", Icon: Redis, url: "https://redis.io" },
  { name: "Elastic", Icon: Elastic, url: "https://www.elastic.co" },
  { name: "Cloudflare", Icon: Cloudflare, url: "https://www.cloudflare.com" },
  { name: "Amazon Web Services", Icon: AWS, url: "https://aws.amazon.com" },
  { name: "Ubuntu", Icon: Ubuntu, url: "https://ubuntu.com" },
  { name: "GitHub", Icon: GitHubDark, url: "https://github.com" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Ether/>
      <Charm/>

      <header className={`relative z-10 ${s.hero}`}>
        <div className={s.titleStage} id={'header-title'}>
          <SphereClouds/>
          <h1 className={s.title}>
            {/* The handwritten signature is drawn as a mask over the gradient;
                the text stays for screen readers and search engines */}
            <span className={s.signature} aria-hidden="true"/>
            <span className="sr-only">Owen Miller</span>
          </h1>
        </div>

        <div className={s.heroCopy}>
          <p className={s.heroText}>
            Full-stack Principal Software Engineer in Melbourne; founder of the Underground Foundation
          </p>

          <div className={s.heroActions}>
            <a href="#contact" className={s.buttonPrimary}>Get in touch</a>
          </div>
        </div>

        <div className={s.polaroidStack}>
          <figure className={`${s.polaroid} ${s.polaroidBack}`}>
            <div className={`${s.photo} ${s.photoLandscape}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={'images/cloud_with_balloons.webp'}
                className={s.portrait}
                alt="Hot air balloons drifting beneath a cloud"
              />
            </div>
          </figure>
          <figure className={s.polaroid}>
            <div className={s.photo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={'images/Owen_2026.webp'}
                className={s.portrait}
                id="header-profile-image"
                alt="Owen Miller, smiling"
              />
            </div>
          </figure>
        </div>
        {/*<video width="100%" autoPlay loop muted playsInline className="rounded" style={{maxWidth: '458px'}}>
                        <source src="/videos/Owen_highlights.mp4" type="video/mp4"/>
                        Your browser must not support the video tag.
                    </video>*/}
      </header>

      <main className={`relative z-10 ${s.main}`}>
        <section id="about" aria-labelledby="about-heading" className={s.section}>
          <h2 id="about-heading" className={s.sectionHeading}>About</h2>
          <div className={s.card}>
            <div className={s.prose}>
              <p className={s.lead}>
                G&apos;day, I&apos;m Owen, a software engineer in <a title={"Melbourne"} href="https://www.timeout.com/news/this-is-officially-the-worlds-best-city-in-2026-according-to-time-out-031126">the world's best city</a>.</p>
              <p>My software experience
                has covered back-end, front-end, blockchain smart contracts and dev-ops.
              </p>
              <p>
                While I have mostly been an individual contributor, I have worn hats as a founder and as a <a title="Chief Technology Officer" href={"#"}>CTO</a> / team lead.
              </p>
              <p>
                I've been guided by an interest in applying computational thought to our society and raising the
                expectations of what society should expect from software − whether that's in improving the distributed
                systems of the <a href={"http://amazon.com/gp/yourstore"}>Amazon.com recommendations</a>, or taking a
                new startup from <i>zero</i> to production.
              </p>
              <h3>Technologies I use</h3>
              <p>I'm always learning new things, but these are some of the technologies I've worked with in the last few years:</p>
              <p className={s.techIcons}>
                {technologies.map(({ name, Icon, url }) => (
                  <a key={name} href={url} title={name} aria-label={name}>
                    <Icon size={50} aria-hidden="true"/>
                  </a>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="work-heading" className={s.section}>
          <h2 id="work-heading" className={s.sectionHeading}>More to Explore</h2>
          <div className={s.cardGrid}>
            <article id="software" className={`${s.card} ${s.mediaCard}`}>
              <div className={s.mediaCardBody}>
                <h3>Tours</h3>
                <p>
                  Everyone's been to a café; everyone's been to a gallery; but do you get to hang out with real locals?
                </p>
                <p>
                  This is why I started the <a href={"https://hanginggardensbrunswick.com.au/"}>Hanging Gardens of Brunswick</a>:
                  it's a chance to visit a beautiful balcony garden and hang out with Brunswick locals, chatting about
                  the famous neighbourhood or whatever else comes to mind − it's an authentic chat, not a scripted tour.
                </p>
                <p>
                  If you're a tourist who would like to get a taste of what no guidebook can
                  capture, then make sure to <a href={"https://hanginggardensbrunswick.com.au/"}>book a slot</a>.
                </p>
              </div>
              <div className={s.mediaCardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={'images/hanging_baskets.webp'} alt="Hanging baskets of native plants beneath a steel grate"/>
              </div>
            </article>

            <article id="podcast" className={`${s.card} ${s.mediaCard}`}>
              <div className={s.mediaCardBody}>
                <h3>Podcast</h3>
                <p>
                  I co-host <a href="https://www.youtube.com/@MyFirstParty">My First Party</a>, a political podcast aimed at
                  inspiring listeners to get involved in grassroots political campaigns and improve their nation, whatever
                  that looks like for them (I avoid letting the show become simply a
                  sermon for my own views).
                </p>
                <p>Reach out if you have ideas for the show!</p>
              </div>
              <div className={s.mediaCardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={'images/Owen_podcast.webp'} alt="Owen laughing beside a podcast microphone"/>
              </div>
            </article>
            <article id="podcast" className={`${s.card} ${s.mediaCard}`}>
              <div className={s.mediaCardBody}>
                <h3>Underground Foundation</h3>
                <p>
                  I am the founder of the <a href={"https://github.com/Underground-Foundation"}>Underground Foundation</a>,
                  an organisation for enabling underground & grassroots political movements. The current projects are:
                </p>
                <ul>
                  <li><a href={"https://github.com/Underground-Foundation/underground-crm"}>underground-crm</a>: an
                    application for a membership database, rich-text editing of websites, and bulk email. Very
                    comparable to NationBuilder, but open-source and much lower cost.</li>
                  <li><a href={"https://github.com/Underground-Foundation/underground-crm"}>underground-ballots</a>:
                    software for ranking candidates in an electorate and rendering how-to-vote PDFs.
                  </li>
                </ul>
              </div>
              <div className={s.mediaCardImage}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={'images/wombat.webp'} alt="The wombat mascot for the Underground Foundation"/>
              </div>
            </article>
          </div>
        </section>

        <section id="links" aria-labelledby="links-heading" className={s.section}>
          <h2 id="links-heading" className={s.sectionHeading}>Let's Connect</h2>
          <ul className={s.links}>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} className={s.link} rel="me noopener" aria-label={social.name} title={social.name}>
                  <svg width="22" height="22" aria-hidden="true">
                    <use href={`/icons/social-icons.svg#${social.icon}-icon`}/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className={s.section}>
          <h2 id="contact-heading" className={s.sectionHeading}>Contact me</h2>
          <div className={s.card}>
            {/* Submissions to Kwes are protected by reCAPTCHA v3. Kwes reads its validation
            rules from the non-standard `rules` attribute. */}
            <form
              className={`kwes-form ${s.form}`}
              action={`https://kwes.io/api/foreign/forms/${KWES_FORM_ID}`}
              method="post"
              has-recaptcha-v3=""
              recaptcha-site-key={RECAPTCHA_SITE_KEY}
            >
              <input type="hidden" name="redirect_to" value="https://media.giphy.com/media/xT5LMrH18OTqQ7QDBu/giphy.gif"/>
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" placeholder="Your name" required {...{rules: "required"}}/>
              </label>
              <label>
                <span>Email address</span>
                <input type="email" name="email" autoComplete="email" placeholder="hello@example.com"/>
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" autoComplete="tel" placeholder="+61 4xx xxx xxx"/>
              </label>
              <label className={s.fullWidth}>
                <span>Message</span>
                <textarea name="message" rows={5} required {...{rules: "required"}} placeholder="Hello Owen, I need to tell you something"/>
              </label>
              <p className={s.fullWidth} lang="fr">
                <small>On peut envoyer un message en français si c&apos;est plus facile.</small>
              </p>
              <button type="submit" className={`${s.buttonPrimary} ${s.submit}`}>Send message</button>
            </form>
            {/* Load after hydration, since Kwes adds its own error and success messages to the form */}
            <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="lazyOnload"/>
            <Script src="https://kwes.io/v2/kwes-script.js" strategy="lazyOnload"/>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
