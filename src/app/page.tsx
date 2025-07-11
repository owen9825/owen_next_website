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
      {/* Background gradient overlay for more depth */}
      <div className="absolute inset-0"></div>

      {/* Blue circles */}
      <div className="absolute top-20 left-16 w-32 h-32 bg-blue-400/40 rounded-full "></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-blue-500/30 rounded-full "></div>

      {/* Main content */}
      <header className={`relative z-10 flex items-center justify-start h-full my-50 font-carter-one`}>
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
      </header>
      <main className="text-black">
          <div className={ s.pageMargin }>
          <p>G'day, I'm Owen Miller, a software engineer in Melbourne, Australia.</p>
          </div>
      </main>
      <Footer/>
    </div>
  );
}
