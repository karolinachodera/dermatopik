import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { ReactElement } from "react";
import { logout } from "../../config/firebase";
import { useRootContext } from '../Root/RootContext';


export function Nav(): ReactElement {
    const { userID } = useRootContext();

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

    function handleLogOut() {
        logout();
        handleLinkClick();
    }

    return (
        <nav id="mainNav">
            <NavLink to="/" onClick={handleLinkClick}>Strona główna</NavLink>
            <NavLink to="/scorad" onClick={handleLinkClick}>Oceń Scorad</NavLink>
            <NavLink to="/daily" onClick={handleLinkClick}>Daily check</NavLink>
            <NavLink to="/notes" onClick={handleLinkClick}>Notatki</NavLink>
            {userID && <NavLink to="/sign-in" onClick={handleLogOut}>Wyloguj</NavLink>}
            {!userID && <NavLink to="/sign-in" onClick={handleLinkClick}>Logowanie</NavLink>}
            <span className="navIcon" onClick={handleIconClick}>=</span>
        </nav>
    )
}