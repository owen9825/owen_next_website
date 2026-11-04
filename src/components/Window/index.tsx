import type { ReactNode } from "react";
import s from "./styles.module.scss";

type Tint = "lilac" | "pink" | "blue" | "mint";

interface WindowProps {
  /** Text shown in the title bar, e.g. "hello.txt" */
  title: string;
  /** Small emoji / glyph shown before the title */
  icon?: string;
  /** Visible heading inside the window, used to label the section */
  heading?: string;
  tint?: Tint;
  id?: string;
  className?: string;
  children: ReactNode;
}

/**
 * A retro desktop-OS style window, rendered in pastel.
 * The title bar buttons are purely decorative.
 */
const Window = ({ title, icon, heading, tint = "lilac", id, className = "", children }: WindowProps) => {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      className={`${s.window} ${s[tint]} ${className}`}
      aria-labelledby={heading ? headingId : undefined}
    >
      <div className={s.titleBar}>
        <span className={s.title}>
          {icon ? <span aria-hidden="true" className={s.titleIcon}>{icon}</span> : null}
          {title}
        </span>
        <span className={s.controls} aria-hidden="true">
          <span className={s.control}>_</span>
          <span className={s.control}>□</span>
          <span className={s.control}>×</span>
        </span>
      </div>
      <div className={s.body}>
        {heading ? <h2 id={headingId} className={s.heading}>{heading}</h2> : null}
        {children}
      </div>
    </section>
  );
};

export default Window;
