import logo from "../../img/logo-dermatopik.png";

import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";



export default function Header(): ReactElement {
  const navigate = useNavigate();
    return (
        <header>
        <img src={logo} alt="Dermatopik" />
        <h1 onClick={() => navigate("/")}>Dziennik Obserwacji Skóry</h1>
      </header>
    )
    
}