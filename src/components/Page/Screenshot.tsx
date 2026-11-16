"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import s from "./styles.module.scss";

type ScreenshotProps = {
  /** Path under public/, starting with a slash */
  src: string;
  alt: string;
  caption: ReactNode;
  /** Span the full width of the Screenshots grid, for wide images */
  wide?: boolean;
  /** The image's natural width in pixels; when given, the image never grows past it */
  width?: number;
};

// The frame's padding and border, around the image
const FRAME_CHROME = 14;

/**
 * A captioned screenshot, framed like a small glass card. Like the homepage polaroids, clicking it
 * lifts it to the centre of the viewport and enlarges it, as far as its natural size and 90% of the
 * viewport allow. Click again, click elsewhere or press Escape to put it back.
 */
const Screenshot = ({ src, alt, caption, wide, width }: ScreenshotProps) => {
  const frame = useRef<HTMLButtonElement>(null);
  const [expanded, setExpanded] = useState<CSSProperties | null>(null);

  const expand = () => {
    const button = frame.current;
    const img = button?.querySelector("img");
    if (!button || !img) return;

    // offsetWidth/Height ignore transforms, so the hover lift doesn't skew the maths
    const rect = button.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    const naturalWidth = img.naturalWidth || img.offsetWidth;
    const aspect = img.offsetHeight / img.offsetWidth;
    const targetImageWidth = Math.min(
      viewportWidth * 0.9 - FRAME_CHROME,
      (viewportHeight * 0.9 - FRAME_CHROME) / aspect,
      naturalWidth,
    );
    const scale = Math.max(1, targetImageWidth / img.offsetWidth);
    // Scaling is about the centre, so move the centre to the viewport's centre
    const dx = viewportWidth / 2 - (rect.left + rect.width / 2);
    const dy = viewportHeight / 2 - (rect.top + rect.height / 2);

    setExpanded({ transform: `translate(${dx}px, ${dy}px) scale(${scale})` });
  };

  // Collapse on Escape, on a click outside the enlarged screenshot, or on resize or scroll
  useEffect(() => {
    if (!expanded) return;
    const collapse = () => setExpanded(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && collapse();
    const onClick = (e: MouseEvent) => {
      if (!frame.current?.contains(e.target as Node)) collapse();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", collapse);
    window.addEventListener("scroll", collapse, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", collapse);
      window.removeEventListener("scroll", collapse);
    };
  }, [expanded]);

  return (
    <figure
      className={[s.screenshot, wide && s.screenshotWide, expanded && s.screenshotExpanded]
        .filter(Boolean).join(" ")}
      style={width ? { maxWidth: width + FRAME_CHROME } : undefined}
    >
      <button
        ref={frame}
        type="button"
        className={s.screenshotFrame}
        style={expanded ?? undefined}
        onClick={() => (expanded ? setExpanded(null) : expand())}
        aria-expanded={!!expanded}
        aria-label={`${expanded ? "Shrink" : "Enlarge"} screenshot: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy"/>
      </button>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Screenshot;
