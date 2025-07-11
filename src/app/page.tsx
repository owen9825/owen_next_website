import Image from "next/image";
import Footer from "@/components/Footer";
import s from './styles.module.scss';

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
        <div className="ml-30 text-center rotate-[-6deg]">
          {/* Main title with pink text and stroke border */}
          <h1 className="text-9xl font-bold text-pink-400 mb-4" style={{
            WebkitTextStroke: '0.1rem #1e40af'
          }}>
            {"Owen Miller".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ transform: 'rotate(3deg)' }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Subtitle with stroke border */}
          <h2 className="text-6xl font-semibold text-pink-300" lang="jp">
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
          <p>G'day, I'm Owen Miller, a software engineer in Melbourne, Australia.</p>
      </main>
      <Footer/>
    </div>
  );
}
