import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { ReactElement } from "react";

export function Nav(): ReactElement {
    function handleIconClick(e: any) {
        const nav: HTMLElement = document.getElementById("mainNav")!;
        nav.classList.toggle("open");
    }

    function handleLinkClick() {
        const nav: HTMLElement = document.getElementById("mainNav")!;
        if (nav.classList.contains("open")) {
            nav.classList.remove("open");
        }
    }

    return (
        <nav id="mainNav">
            <NavLink to="/" onClick={handleLinkClick}>Strona główna</NavLink>
            <NavLink to="/scorad" onClick={handleLinkClick}>Oceń Scorad</NavLink>
            <NavLink to="/daily" onClick={handleLinkClick}>Daily check</NavLink>
            <NavLink to="/notes" onClick={handleLinkClick}>Notatki</NavLink>
            <NavLink to="/login" onClick={handleLinkClick}>Logowanie</NavLink>
            <span className="navIcon" onClick={handleIconClick}>=</span>
        </nav>
    )
}