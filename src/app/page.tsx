import Image from "next/image";
import Footer from "@/components/Footer";
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

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* https://react.dev/reference/react-dom/components/link#special-rendering-behavior */}
      <link href={"https://cdn.jsdelivr.net/npm/augmented-ui@2.0.0/augmented-ui.min.css"}
            rel="stylesheet"
            precedence={"default"}
            crossOrigin={"anonymous"}
            integrity={"fG4HX+vLcVwnxSvpq3oQHVC/yRJ+R8b3tXmuYoDYqVk="}
      />
      <div className="absolute inset-0"></div>

      {/* Blue circles */}
      <div className="absolute top-20 left-16 w-32 h-32 bg-blue-400/40 rounded-full "></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-blue-500/30 rounded-full "></div>

      {/* Main content */}
      <header className={`relative z-10 flex items-center justify-stretch h-full my-50 font-carter-one`}>
        <div className={`flex justify-start`}>
          <div className={`${s.pageMargin} text-left rotate-[-6deg]`}>
              {/* Main title with pink text and stroke border */}
              <h1 className={`${s.bannerTextXl} font-bold text-pink-400 mb-4`} style={{
                WebkitTextStroke: '0.1rem #1e40af'
              }}>
                {splitCharactersInParagraph("Owen Miller")}
              </h1>

              {/* Subtitle with stroke border */}
              <h2 className={`${s.bannerTextL} font-semibold text-pink-300`} lang="jp">
                  <span className={ s.borderPunctuation }>(</span>
                  {"オウェン".split("").map((char, index) => (
                      <span
                        key={index}
                        className={`inline-block ${s.borderText}`}
                        style={{ transform: 'rotate(3deg)' }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                  ))}
                  <span className={ s.borderPunctuation }>)
                  </span>
              </h2>
          </div>
        </div>

        <div className={`${s.pageMarginRight} border-radius-5 ${s.augmentedVideo} ${s.neonPinkBorder}`} data-augmented-ui="tr-clip bl-clip br-clip-y both">

            <img src={'images/Owen_in_Brunswick.jpg'}/>
            {/*<video width="100%" autoPlay loop muted playsInline className="rounded" style={{maxWidth: '458px'}}>
                    <source src="/videos/Owen_highlights.mp4" type="video/mp4"/>
                    Your browser must not support the video tag.
                </video>*/}
        </div>

      </header>
      <main className="text-black">
          <div className={ s.pageMargin }>
          <p>G'day, I'm Owen Miller, a software engineer in Melbourne, Australia.</p>
          </div>
          <div className={`${s.pageMarginRight} my-15 border-radius-5 ${s.neonPinkBorder}`} style={{maxWidth: "300px"}}>

            <img src={'images/Owen_in_Brunswick.jpg'} className={"max-w-full"} style={{zIndex:11}}/>
          </div>
          <section>
              Something eles here
          </section>
      </main>
      <Footer/>
    </div>
  );
}
