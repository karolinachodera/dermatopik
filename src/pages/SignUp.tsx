import { ReactElement } from "react";
import { useRootContext } from '../components/Root/RootContext';

import Section from "../components/Section/Section";

export function SignUp() {
    return (
        <main>
            <Section id="login" style="frame" header="Zarejestruj się">
                <form>
                    <label htmlFor="name">Imię</label>
                    <input type="text" name="name"></input>
                    <label htmlFor="email">Adres email</label>
                    <input type="email" name="email"></input>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password"></input>
                    <label htmlFor="password-repeat">Powtórz hasło</label>
                    <input type="password" name="password-repeat"></input>
                    <input type="submit" value="Zaloguj"></input>
                </form>

        </Section>
        </main>

    )
}