import Section from "../components/Section/Section";
import { UserForm } from "../components/UserForm/UserForm";

export function SignUp() {
    return (
        <main>
            <Section id="login" style="frame" header="Zarejestruj się">
                <UserForm formType="signup"/>
            </Section>
        </main>

    )
}