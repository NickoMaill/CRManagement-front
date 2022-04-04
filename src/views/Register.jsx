export default function Register() {

    return (
        <>
            <h1>Register</h1>
            <div className="form-container">
                <form action="submit" className="form-content">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="exemple@monemail.com" />
                    <label htmlFor="password">Mot de passe</label>
                    <input name="password" type={isVisible} placeholder="********" />
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