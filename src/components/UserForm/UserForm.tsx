import { ReactElement } from "react";
import { db, auth } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./UserForm.scss";
import { useNavigate } from "react-router-dom";

interface UserFormProps {
    formType: string,
}

export function UserForm({ formType }: UserFormProps): ReactElement {
    const navigate = useNavigate();
    async function loginUser(e: React.FormEvent<HTMLFormElement>) {
        document.querySelector(".error")!.classList.remove("visible");
        const loginEmail = (e.target as HTMLFormElement).email.value;
        const loginPassword = (e.target as HTMLFormElement).password.value;
        try {
            const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            navigate("/");
        } catch (error) {
            showLoginError(e, error);
        }
    }

    async function createAccount(e: React.FormEvent<HTMLFormElement>) {
        document.querySelector(".error")!.classList.remove("visible");
        const loginName: string = (e.target as HTMLFormElement).user.value;
        const loginEmail: string = (e.target as HTMLFormElement).email.value;
        const loginPassword: string = (e.target as HTMLFormElement).password.value;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(userCredential.user.uid);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                name: loginName,
                email: loginEmail,
                id: userCredential.user.uid,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
            showLoginError(e, error);
        }
    } 

    function showLoginError(e: any, error: any) {
        const message: HTMLParagraphElement = document.querySelector(".error") as HTMLParagraphElement;
        message.classList.add("visible");
        if (error.code === "auth/invalid-login-credentials") {
            message.textContent = "Błędne hasło. Spróbuj ponownie.";
        } else {
            message.textContent = `Błąd logowania. ${error.message}`;
        }
    }

    function handleUserSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (formType === "login") {
            loginUser(e);
        }
        if (formType === "signup") {
            createAccount(e);
        }
    }

    return (
        <form onSubmit={(e)=>handleUserSubmit(e)} className="sign-user">
            {formType === "signup" && 
                <>
                <label htmlFor="user">Imię</label>
                <input type="text" name="user" title="Imię o długości 2-10 znaków, może zawierać tylko małe i duże litery" required minLength={2} maxLength={10} pattern="[A-Za-z]{2,10}"></input>
                </>
            }
            <label htmlFor="email">Adres email</label>
            {/* wzór: znaki@znaki.litery(min2) */}
            <input type="email" name="email" required minLength={5} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"></input>
            
            {formType === "signup" &&
                <>
                <label htmlFor="password">Hasło (powinno mieć długość 6-15 znaków i zawierać przynajmniej jedną cyfrę, jedną literę i jeden znak specjalny)</label>
                <input type="password" name="password" title="Hasło o długości 6-15 znaków, w tym jedna cyfra i jedna litera" required minLength={6} maxLength={15} pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[.\-?!&%#]).{6,15}$"></input>
                </>
            }
            {
                formType === "login" &&
                <>
                    <label htmlFor="password">Hasło</label>
                    <input type="password" name="password" required minLength={6} maxLength={15}></input>
                    </>
            }
            
            {/* {formType === "signup" && 
                <>
                <label htmlFor="password-repeat">Powtórz hasło</label>
                <input type="password" name="password-repeat"></input>
                </>
            } */}
            <p className="error"></p>
            <input className="button" type="submit" value={formType === "signup" ? "Utwórz konto" : "Zaloguj"} ></input>
                </form>
    )
}