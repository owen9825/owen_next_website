import type { ReactNode } from "react";
import s from "./styles.module.scss";

export type Tint = "rose" | "amber" | "aqua" | "violet" | "pearl";

interface GlassProps {
  tint?: Tint;
  heading?: string;
  id?: string;
  className?: string;
  children: ReactNode;
}

/** A pane of tinted dichroic glass, with a colour-shifting edge */
const Glass = ({ tint = "pearl", heading, id, className = "", children }: GlassProps) => {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={heading ? headingId : undefined}
      className={`${s.glass} ${s[tint]} ${className}`}
    >
      {heading ? <h2 id={headingId} className={s.heading}>{heading}</h2> : null}
      {children}
    </section>
  );
};

export default Glass;
