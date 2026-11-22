import type { ReactNode } from "react";
import Link from "next/link";
import s from "./styles.module.scss";

/**
 * Building blocks for a page's content. The backdrop and footer come from
 * src/app/layout.tsx, so a page only needs something like:
 *
 *   <Main>
 *     <Section id="about" title="About">
 *       <Card><Prose>…</Prose></Card>
 *     </Section>
 *   </Main>
 */

type Children = { children: ReactNode };

/** The page's centred content column; use it once per page */
export const Main = ({ children }: Children) => (
  <main className={`relative z-10 ${s.main}`}>{children}</main>
);

/** One step in a breadcrumb trail; leave out href for the current page */
export type Crumb = { label: ReactNode; href?: string };

/** A breadcrumb trail, e.g. Home › Underground Foundation › Underground CRM */
export const Breadcrumbs = ({ crumbs }: { crumbs: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className={s.breadcrumbs}>
    <ol>
      {crumbs.map((crumb, i) => (
        <li key={i}>
          {crumb.href
            ? <Link href={crumb.href}>{crumb.label}</Link>
            : <span aria-current="page">{crumb.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

type SectionProps = Children & {
  /** Anchor for links like #about; the heading gets the id `${id}-heading` */
  id: string;
  /** Visible, underlined heading */
  title?: ReactNode;
  /** For a section without a visible title, the name screen readers announce */
  label?: string;
  /** 1 for a page's main heading; sections of a page default to 2 */
  level?: 1 | 2;
  /** A trail shown beneath the heading, ending with the current page */
  breadcrumbs?: Crumb[];
};

export const Section = ({ id, title, label, level = 2, breadcrumbs, children }: SectionProps) => {
  const Heading = level === 1 ? "h1" : "h2";
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      className={`${s.section} ${level === 1 ? s.pageSection : ""}`}
      aria-labelledby={title ? headingId : undefined}
      aria-label={title ? undefined : label}
    >
      {title && <Heading id={headingId} className={s.sectionHeading}>{title}</Heading>}
      {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs}/>}
      {children}
    </section>
  );
};

/** A frosted-glass panel */
export const Card = ({ children }: Children) => (
  <div className={s.card}>{children}</div>
);

type MediaCardProps = Children & {
  id?: string;
  title: ReactNode;
  /** Path under public/, starting with a slash, e.g. "/images/wombat.webp" */
  image: string;
  /**
   * Renditions of the image with their widths, e.g. "/images/wombat-409w.webp 409w, /images/wombat.webp 1456w".
   * On mobile, the image is a 4:3 thumbnail 40% of the card wide. Beside the text, it fills the card's
   * full height and is cropped to fit, so it's drawn much wider than its column (about 810px for the
   * Tanuki card), which is why we ask for 820px there.
   */
  srcSet?: string;
  imageAlt: string;
};

/**
 * A card with an image filling its right edge, beside the title and text. On mobile, the image shares
 * a row with the title only, and the text runs full width beneath them.
 */
export const MediaCard = ({ id, title, image, srcSet, imageAlt, children }: MediaCardProps) => (
  <article id={id} className={`${s.card} ${s.mediaCard}`}>
    <h3 className={s.mediaCardTitle}>{title}</h3>
    <div className={s.mediaCardImage}>
      {/* Lazy, so these wait until they're near the viewport and don't compete with the hero's
          polaroids; low priority in case one is already on screen when the page loads */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} srcSet={srcSet} sizes={srcSet && "(min-width: 850px) 820px, 40vw"} alt={imageAlt}
           loading="lazy" fetchPriority="low" decoding="async"/>
    </div>
    <div className={s.mediaCardBody}>{children}</div>
  </article>
);

/** Lays out cards in a column, lifting each one on hover */
export const CardGrid = ({ children }: Children) => (
  <div className={s.cardGrid}>{children}</div>
);

/** Slightly larger body text, for longer passages */
export const Prose = ({ children }: Children) => (
  <div className={s.prose}>{children}</div>
);

/** An opening paragraph in larger, darker text */
export const Lead = ({ children }: Children) => (
  <p className={s.lead}>{children}</p>
);

/** Groups Screenshots on a shaded panel, in a grid; a `wide` screenshot spans the full row */
export const Screenshots = ({ children }: Children) => (
  <div className={s.screenshots}>{children}</div>
);

/** A captioned screenshot that enlarges when clicked; see Screenshot.tsx */
export { default as Screenshot } from "./Screenshot";

type HeroImageProps = {
  /** Path under public/, starting with a slash */
  src: string;
  alt: string;
};

/** A full-width banner image, for directly beneath a page's h1 */
export const HeroImage = ({ src, alt }: HeroImageProps) => (
  <div className={s.heroImage}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt}/>
  </div>
);

type FramedImageProps = {
  /** Path under public/, starting with a slash */
  src: string;
  alt: string;
  /** Where clicking the image goes */
  href: string;
  /** The image's natural width in pixels; it never grows past this */
  width: number;
};

/**
 * A small linked image, such as a repo header, on a white band spanning the
 * content width. Suits images with white edges, which blend into the band.
 */
export const FramedImage = ({ src, alt, href, width }: FramedImageProps) => (
  <a href={href} className={s.framedImage}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} style={{ maxWidth: width }}/>
  </a>
);
