import logo from "../../img/logo-dermatopik.png";

import { ReactElement } from "react";


export default function Header(): ReactElement {
    return (
        <header>
        <img src={logo} alt="Dermatopik" />
        <h1>Dziennik Obserwacji Skóry</h1>
      </header>
    )
    
}