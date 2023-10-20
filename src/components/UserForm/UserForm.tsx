import { ReactElement } from "react";
import {
    handleUserLogin
} from "../../config/firebase";

import "./UserForm.scss";

interface UserFormProps {
    formType: string,
    //handleUserSubmit: FormEventHandler,
}



export function UserForm({ formType }: UserFormProps): ReactElement {
    function handleUserSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formType === "login") {
            handleUserLogin(e);
        }
    }
    return (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleUserSubmit(e)}>
            {formType === "signup" && 
                <>
                <label htmlFor="name">Imię</label>
                <input type="text" name="name"></input>
                </>
            }
            <label htmlFor="email">Adres email</label>
            <input type="email" name="email" required></input>
            <label htmlFor="password">Hasło</label>
            <input type="password" name="password" required></input>
            {formType === "signup" && 
                <>
                <label htmlFor="password-repeat">Powtórz hasło</label>
                <input type="password" name="password-repeat"></input>
                </>
            }
            <p className="error"></p>
            <input type="submit" value={formType === "signup" ? "Utwórz konto" : "Zaloguj"} ></input>
                </form>
    )
}