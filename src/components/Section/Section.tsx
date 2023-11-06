import { ReactElement, ReactNode } from "react";
import "./Section.scss";

interface SectionProps {
  children: ReactNode,
  header?: string,
  id: string,
  appearance?: string
}

function Section({ children, header, id, appearance }: SectionProps): ReactElement {
  return (
    <section className={appearance} id={id}>
      {header &&
        <h2>{header}</h2>
       }
      {children}
    </section>
  );
}

export default Section;
