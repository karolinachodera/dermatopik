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
            // showApp(userCredential.user.uid);
        } catch (error) {
            showLoginError(e, error);
        }
    }

    async function createAccount(e: React.FormEvent<HTMLFormElement>) {
        document.querySelector(".error")!.classList.remove("visible");
        const loginName = (e.target as HTMLFormElement).name;
        const loginEmail = (e.target as HTMLFormElement).email.value;
        const loginPassword = (e.target as HTMLFormElement).password.value;
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                name: loginName,
                email: loginEmail,
                id: userCredential.user.uid,
            })
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
        <form onSubmit={(e)=>handleUserSubmit(e)}>
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