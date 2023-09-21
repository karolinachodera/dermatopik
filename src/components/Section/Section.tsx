import { ReactElement, ReactNode } from "react";
import "./Section.scss";

interface SectionProps {
  children: ReactNode,
  header?: string,
  width?: string,
  id: string,
  style?: string
}

function Section({ children, header, width, id, style }: SectionProps): ReactElement {
  return (
    <section className={`${width} ${style}`} id={id}>
      {header &&
        <h2>{header}</h2>
       }
      {children}
    </section>
  );
}

export default Section;
