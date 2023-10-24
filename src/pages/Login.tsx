import { Link } from "react-router-dom";
import { UserForm } from "../components/UserForm/UserForm";

import Section from "../components/Section/Section";

export function Login() {
    return (
        <main>
            <Section style="frame" id="login" header="Zaloguj się">
                <p>Nie masz konta? <Link to="/sign-up">Zarejestruj się</Link></p>
                <UserForm formType="login"/>
            </Section>
        </main>
    )
}