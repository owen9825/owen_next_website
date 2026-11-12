"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import s from "@/app/styles.module.scss";

type Photo = {
  src: string;
  alt: string;
  id?: string;
  landscape?: boolean;
  back?: boolean;
};

// The back print comes first, so it sits beneath the portrait
const photos: Photo[] = [
  { src: "images/cloud_with_balloons.webp", alt: "Hot air balloons drifting beneath a cloud", landscape: true, back: true },
  { src: "images/Owen_2026.webp", alt: "Owen Miller, smiling", id: "header-profile-image" },
];

/**
 * Clicking a polaroid lifts it to the horizontal centre of the viewport, keeping its top edge where it
 * was, and enlarges it so the photo is min(90vw, its intrinsic width). Click again, click elsewhere or
 * press Escape to put it back.
 */
const Polaroids = () => {
  const figures = useRef<(HTMLElement | null)[]>([]);
  const [expanded, setExpanded] = useState<{ index: number; style: CSSProperties } | null>(null);

  const expand = (index: number) => {
    const figure = figures.current[index];
    const img = figure?.querySelector("img");
    if (!figure || !img) return;

    // Transforms here are all about the element's centre, so the bounding box's centre is the layout
    // centre, regardless of tilt or hover scale. offsetWidth/Height ignore transforms.
    const rect = figure.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const targetImageWidth = Math.min(viewportWidth * 0.9, img.naturalWidth || img.offsetWidth);
    const scale = targetImageWidth / img.offsetWidth;
    const dx = viewportWidth / 2 - (rect.left + rect.width / 2);
    // Scaling about the centre pushes the top up by (scale - 1) * height / 2; shift down to compensate
    const dy = ((scale - 1) * figure.offsetHeight) / 2;

    setExpanded({
      index,
      style: { translate: `${dx}px ${dy}px`, scale: `${scale}`, rotate: "0deg" },
    });
  };

  const toggle = (index: number) => {
    if (expanded?.index === index) setExpanded(null);
    else expand(index);
  };

  // Collapse on Escape, on a click outside the expanded print, or when the viewport is resized
  useEffect(() => {
    if (!expanded) return;
    const collapse = () => setExpanded(null);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && collapse();
    const onClick = (e: MouseEvent) => {
      if (!figures.current[expanded.index]?.contains(e.target as Node)) collapse();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", collapse);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", collapse);
    };
  }, [expanded]);

  return (
    <div className={s.polaroidStack}>
      {photos.map((photo, index) => {
        const isExpanded = expanded?.index === index;
        return (
          <figure
            key={photo.src}
            ref={(el) => { figures.current[index] = el; }}
            className={[s.polaroid, photo.back && s.polaroidBack, isExpanded && s.polaroidExpanded]
              .filter(Boolean).join(" ")}
            style={isExpanded ? expanded.style : undefined}
            onClick={() => toggle(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? "Shrink" : "Enlarge"} photo: ${photo.alt}`}
          >
            <div className={`${s.photo} ${photo.landscape ? s.photoLandscape : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} className={s.portrait} id={photo.id} alt={photo.alt}/>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default Polaroids;
