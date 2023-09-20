import { ReactElement, ReactNode } from "react";
import "./Section.scss";

interface SectionProps {
  children: ReactNode,
  header?: string,
  width?: string,
  id: string,
}

function Section({ children, header, width, id }: SectionProps): ReactElement {
  return (
    <section className={width} id={id}>
      {header &&
        <h2>{header}</h2>
       }
      {children}
    </section>
  );
}

export default Section;
