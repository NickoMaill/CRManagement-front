import { useState } from "react"
import "../sass/login.scss"

export default function Login() {
    const [isVisible, setIsVisible] = useState("password")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputClass, setInputClass] = useState("");

    const checkBox = () => {
        if (isVisible === "password") {
            setIsVisible("text")
        } else {
            setIsVisible("password")
        }
    }

    return (
        <>
            <h1>Login</h1>
            <div className="form-container">
                <form action="submit" className="form-content">
                    <label htmlFor="email">Email</label>
                    <input className={`input-info ${inputClass}`} name="email" type="text" placeholder="exemple@monemail.com" />
                    <label htmlFor="password">Mot de passe</label>
                    <input className={`input-info ${inputClass}`} name="password" type={isVisible} placeholder="********" />
                    <div>
                        <input type="checkbox" name="showPassword" onChange={checkBox} />
                        <label htmlFor="showPassword">afficher le mot de passe</label>
                    </div>
                    <button className="send-login" type="button">Se Connecter</button>
                </form>
            </div>
        </>
    )
}