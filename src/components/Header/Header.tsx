import logo from "../../img/logo-dermatopik.png";

import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";



export default function Header(): ReactElement {
  const navigate = useNavigate();
    return (
        <header>
        <a href="https://dermatopik.pl/" target="_blank"><img src={logo} alt="Dermatopik" /></a>
        <h1 onClick={() => navigate("/")}>Dziennik Obserwacji Skóry</h1>
      </header>
    )
    
}