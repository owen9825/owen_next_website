import Footer from "@/components/Footer";
import Window from "@/components/Window";
import Waves from "@/components/Waves";
import Dreamscape, { Sparkle } from "@/components/Dreamscape";
import { Bolt, GridFloor, HoloOrb, HoloTriangle, NeonTriangle, Pyramid, Squiggle, WireOctahedron } from "@/components/Shapes";
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* https://react.dev/reference/react-dom/components/link#special-rendering-behavior */}
      <link href={"https://cdn.jsdelivr.net/npm/augmented-ui@2.0.0/augmented-ui.min.css"}
            rel="stylesheet"
            precedence={"default"}
            crossOrigin={"anonymous"}
            integrity={"fG4HX+vLcVwnxSvpq3oQHVC/yRJ+R8b3tXmuYoDYqVk="}
      />
      <Dreamscape/>

      {/* Hero */}
      <div className={`relative z-10 ${s.hero}`}>
        <Waves variant="backdrop"/>
        <GridFloor/>

        {/* Collage shapes */}
        <HoloOrb className={s.shapeOrb}/>
        <Squiggle className={s.shapeSquiggle}/>
        <Pyramid className={s.shapePyramid}/>
        <WireOctahedron className={s.shapeWire}/>
        <Bolt className={s.shapeBolt}/>
        <HoloTriangle className={s.shapeHoloTriangle}/>

        <p className={s.verticalJp} lang="ja" aria-hidden="true">夢の世界</p>

        <header className={`relative z-10 flex flex-col sm:flex-row items-center justify-start sm:justify-center h-full font-carter-one ${s.heroInner}`}>
          <div className={`flex flex-col justify-start`} id={'header-title'}>
            <div className={`${s.pageMargin} text-left rotate-[-6deg]`}>
              {/* Main title with pink text and stroke border */}
              <h1 className={`${s.bannerTextXl} font-bold text-pink-400 mb-4 inline-block`} style={{
                WebkitTextStroke: '0.1rem #1e40af'
              }}>
                {splitCharactersInParagraph("Owen Miller")}
              </h1>

              {/* Subtitle with stroke border */}
              <h2 className={`${s.bannerTextL} font-semibold text-pink-300`} lang="jp">
                <span className={s.borderPunctuation}>(</span>
                {"オウェン".split("").map((char, index) => (
                  <span
                    key={index}
                    className={`inline-block ${s.borderText}`}
                    style={{ transform: 'rotate(3deg)' }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
                <span className={s.borderPunctuation}>)</span>
              </h2>
            </div>
          </div>

          <div className={`relative ${s.xsPageMarginLeft} mt-14 sm:mt-0 sm:ml-0 ${s.pageMarginRight}`}>
            <NeonTriangle className={s.photoTriangle}/>
            <div className={`border-radius-5 ${s.augmentedVideo} ${s.neonPinkBorder} sm:w-auto`}
                 data-augmented-ui="tr-clip bl-clip br-clip-y both" id="header-profile-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={'images/Owen_in_Brunswick.jpg'}
                className="w-full h-auto max-w-[400px] object-cover"
                alt="Owen Miller, smiling, with pink hair"
              />
              {/*<video width="100%" autoPlay loop muted playsInline className="rounded" style={{maxWidth: '458px'}}>
                              <source src="/videos/Owen_highlights.mp4" type="video/mp4"/>
                              Your browser must not support the video tag.
                          </video>*/}
            </div>
            <Sparkle size={28} className={s.photoSparkleA}/>
            <Sparkle size={18} className={s.photoSparkleB}/>
          </div>
        </header>
      </div>

      <Waves className="relative z-10"/>

      <main className={`relative z-10 ${s.pageMargin} ${s.desktop}`}>
        <Window id="hello" title="hello.txt" icon="👋" tint="pink" className={s.winHello}>
          <p className={s.lead}>
            G&apos;day, I&apos;m Owen ✨ a software engineer in Melbourne, Australia, and an electoral candidate
            for the <a href="https://www.fusionparty.org.au/owen_miller">Fusion Party</a>.
          </p>
          <p>
            If you&apos;d like me to work with you; if you&apos;d like to work for me; if you&apos;d like my media
            involvement; or if you&apos;d like to chat about the podcast, then those are good reasons
            to <a href="#contact">reach out</a>.
          </p>
        </Window>

        <Window id="software" title="software_engineering.exe" icon="💾" heading="Software Engineering" tint="blue" className={s.winSoftware}>
          <p>
            I enjoy software engineering as it&apos;s the most practical way for me to create the future.
          </p>
          <p>
            I can build software from the ground up at small start-ups
            (<a href="https://bevrly.com/sheets/">Bevrly 🍷</a>, <a href="https://tanuki.ai">Tanuki.ai</a>, <a href="http://wx.io">Wx.io</a>)
            and I can add value to large-scale systems like
            the <a href="https://www.amazon.com/gp/yourstore/">recommendations</a> at <a href="https://amazon.com">Amazon.com</a>.
          </p>
        </Window>

        <Window id="politics" title="politics.doc" icon="🗳️" heading="Politics" tint="lilac" className={s.winPolitics}>
          <p>
            I&apos;m an executive member of the <a href="https://www.fusionparty.org.au/owen_miller">Fusion Party</a>.
          </p>
          <p>
            I&apos;m also the founder of the <a href="https://nonhuman.party">Non-Human Party</a>,
            bringing <a href="https://www.youtube.com/watch?v=Xp2Bgk9Lf8Y">Nationality as a Service</a> to Australia.
            If you&apos;re also interested in helping robots and software fill a place in society harmoniously, then
            say hi 🙂
          </p>
        </Window>

        <Window id="podcast" title="my_first_party.mp3" icon="🎙️" heading="Podcast" tint="mint" className={s.winPodcast}>
          <p>
            I co-host <a href="https://www.youtube.com/@MyFirstParty">My First Party</a>, a political podcast aimed at
            inspiring listeners to get involved in grassroots political campaigns, so they can play a part in
            improving their nation, whatever that looks like for them. (I avoid letting the show become simply a
            sermon for Fusion.) Reach out if you have ideas for the show!
          </p>
        </Window>

        <Window id="links" title={"C:\\Owen\\Links"} icon="📁" heading="Find me" tint="pink" className={s.winLinks}>
          <ul className={s.iconGrid}>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.url} className={s.desktopIcon} rel="me noopener">
                  <span className={s.iconTile}>
                    <svg width="28" height="28" aria-hidden="true">
                      <use href={`/icons/social-icons.svg#${social.icon}-icon`}/>
                    </svg>
                  </span>
                  <span className={s.iconLabel}>{social.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </Window>

        <Window id="contact" title="contact.exe" icon="💌" heading="Contact Me" tint="lilac" className={s.winContact}>
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
            <button type="submit" className={s.button}>Send ✧</button>
          </form>
        </Window>
      </main>

      <div className="relative z-10 mt-16">
        <Waves/>
        <Footer/>
      </div>
    </div>
  );
}
