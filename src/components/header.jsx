import { Link } from "react-router-dom"
import "../sass/header.module.scss"

export default function Header() {
    return (
        <>
            <header>
                <div>
                    <nav>
                    <Link to="/">Homepage</Link> 
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </div>
        </header>
        </>
    )
}