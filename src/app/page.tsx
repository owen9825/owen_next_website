import Footer from "@/components/Footer";
import Ether from "@/components/Ether";
import SphereClouds from "@/components/SphereClouds";
import Charm from "@/components/Charm";
import s from './styles.module.scss';

const splitCharactersInSentence = (sentence: string, className: string = "") => (
    sentence.split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block ${className || ''}`}
                style={{ transform: 'rotate(3deg)' }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))
)

const splitCharactersInParagraph = (paragraph: string) => {
    const sentences = paragraph.split(" ");
    return sentences.map((sentence, index) => {
        return (
            <div className={"inline"} key={`s_${index}`}>
            <p className={"inline text-nowrap"}>{splitCharactersInSentence(sentence)}</p>
            {/* Re-establish the spaces */}
            { (sentences.length > 1 && index < sentences.length - 1) ? <span> </span> : null}
            </div>
        )
    })
}

const socials = [
  { name: "GitHub", icon: "github", url: "https://www.github.com/owen9825" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/owen-miller-12112273/" },
  { name: "Stack Overflow", icon: "stack-overflow", url: "https://stackoverflow.com/users/1495729/kokociel" },
  { name: "My First Party", icon: "youtube", url: "https://www.youtube.com/@MyFirstParty" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/owenfm_/" },
  { name: "Twitter", icon: "twitter", url: "https://twitter.com/OwenFM_" },
  { name: "Spotify", icon: "spotify", url: "https://open.spotify.com/user/12140765598" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Software", href: "#software" },
  { label: "Politics", href: "#politics" },
  { label: "Podcast", href: "#podcast" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Ether/>
      <Charm/>

      {/* Gradient map that recolours the portrait in pastel purple:
          shadows → muted violet, midtones → lavender, highlights → near white */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="pastel-purple" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0"/>
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.29 0.616 0.851 0.973"/>
            <feFuncG type="table" tableValues="0.227 0.549 0.788 0.949"/>
            <feFuncB type="table" tableValues="0.549 0.878 1 1"/>
          </feComponentTransfer>
        </filter>
      </svg>

      <nav className={`relative z-20 ${s.nav}`} aria-label="Main">
        <a href="#" className={s.brand}>
          <span className={s.brandMark} aria-hidden="true">OM</span>
          <span>Owen Miller</span>
        </a>
        <ul className={s.navLinks}>
          {navItems.map((item) => (
            <li key={item.href}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={s.buttonPrimary}>Get in touch</a>
      </nav>

      <header className={`relative z-10 ${s.hero}`}>
        <div className={`${s.breeze} ${s.titleBlock}`} id={'header-title'}>
          <div className={s.titleStage}>
            <SphereClouds/>
            <h1 className={s.title}>
              {splitCharactersInParagraph("Owen Miller")}
            </h1>
          </div>

          <h2 className={s.japanese} lang="ja">
            <span className={s.bracket}>(</span>
            {"オウェン".split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block`}
                style={{ transform: 'rotate(3deg)' }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <span className={s.bracket}>)</span>
          </h2>

          <p className={s.heroText}>
            Software engineer in Melbourne, founder of the Non-Human Party, and co-host of the
            My First Party podcast.
          </p>

          <div className={s.heroActions}>
            <a href="#contact" className={s.buttonPrimary}>Get in touch</a>
            <a href="https://www.youtube.com/@MyFirstParty" className={s.buttonGlass}>Watch the podcast</a>
          </div>
        </div>

        <div className={s.portraitFrame}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={'images/Owen_in_Brunswick.jpg'}
            className={s.portrait}
            id="header-profile-image"
            alt="Owen Miller, smiling"
          />
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
                G&apos;day, I&apos;m Owen, a software engineer in Melbourne, Australia, and an electoral candidate
                for the <a href="https://www.fusionparty.org.au/owen_miller">Fusion Party</a>.
              </p>
              <p>
                If you&apos;d like me to work with you; if you&apos;d like to work for me; if you&apos;d like my media
                involvement; or if you&apos;d like to chat about the podcast, then those are good reasons
                to <a href="#contact">reach out</a>.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="work-heading" className={s.section}>
          <h2 id="work-heading" className={s.sectionHeading}>What I do</h2>
          <div className={s.cardGrid}>
            <article id="software" className={s.card}>
              <h3>Software Engineering</h3>
              <p>
                I enjoy software engineering as it&apos;s the most practical way for me to create the future.
              </p>
              <p>
                I can build software from the ground up at small start-ups
                (<a href="https://bevrly.com/sheets/">Bevrly 🍷</a>, <a href="https://tanuki.ai">Tanuki.ai</a>, <a href="http://wx.io">Wx.io</a>)
                and I can add value to large-scale systems like
                the <a href="https://www.amazon.com/gp/yourstore/">recommendations</a> at <a href="https://amazon.com">Amazon.com</a>.
              </p>
            </article>

            <article id="politics" className={s.card}>
              <h3>Politics</h3>
              <p>
                I&apos;m an executive member of the <a href="https://www.fusionparty.org.au/owen_miller">Fusion Party</a>.
              </p>
              <p>
                I&apos;m also the founder of the <a href="https://nonhuman.party">Non-Human Party</a>,
                bringing <a href="https://www.youtube.com/watch?v=Xp2Bgk9Lf8Y">Nationality as a Service</a> to Australia.
                If you&apos;re also interested in helping robots and software fill a place in society harmoniously, then
                say hi 🙂
              </p>
            </article>

            <article id="podcast" className={s.card}>
              <h3>Podcast</h3>
              <p>
                I co-host <a href="https://www.youtube.com/@MyFirstParty">My First Party</a>, a political podcast aimed at
                inspiring listeners to get involved in grassroots political campaigns, so they can play a part in
                improving their nation, whatever that looks like for them. (I avoid letting the show become simply a
                sermon for Fusion.) Reach out if you have ideas for the show!
              </p>
            </article>
          </div>
        </section>

        <section id="links" aria-labelledby="links-heading" className={s.section}>
          <h2 id="links-heading" className={s.sectionHeading}>Find me</h2>
          <ul className={s.links}>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} className={s.link} rel="me noopener">
                  <svg width="16" height="16" aria-hidden="true">
                    <use href={`/icons/social-icons.svg#${social.icon}-icon`}/>
                  </svg>
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className={s.section}>
          <h2 id="contact-heading" className={s.sectionHeading}>Contact me</h2>
          <div className={s.card}>
            {/* TODO: connect to a form handler (the old site posted to kwes.io) */}
            <form className={s.form}>
              <label>
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" placeholder="Your name" required/>
              </label>
              <label>
                <span>Email address</span>
                <input type="email" name="email" autoComplete="email" placeholder="hello@example.com"/>
              </label>
              <label className={s.fullWidth}>
                <span>Message</span>
                <textarea name="message" rows={5} required placeholder="Hello Owen, I need to tell you something"/>
              </label>
              <p className={s.fullWidth} lang="fr">
                <small>On peut envoyer un message en français si c&apos;est plus facile.</small>
              </p>
              <button type="submit" className={`${s.buttonPrimary} ${s.submit}`}>Send message</button>
            </form>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
