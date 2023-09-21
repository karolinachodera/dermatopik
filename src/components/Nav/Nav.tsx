import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <Link to="/">Strona główna</Link>
            <Link to="/scorad">Oceń Scorad</Link>
            <Link to="/daily">Daily check</Link>
            <Link to="/notes">Notatki</Link>
        </nav>
    )
}