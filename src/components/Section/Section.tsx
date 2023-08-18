import { ReactElement, ReactNode } from "react";
import "./Section.scss";

function Section({ children, header, width, id }: { children: ReactNode, header: string, width: string, id: string}): ReactElement {
  return (
    <section className={`${width} main`} id={id}>
      <h2>{header}</h2>
      {children}
    </section>
  );
}

export default Section;
