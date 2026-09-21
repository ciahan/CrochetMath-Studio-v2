import { Link } from "react-router-dom";
import logo from "../assets/CrochetMath Studio Logo.svg";

export default function Header() {
    return (
        <header className="header">
            <Link 
                className="homeButton"
                to="/"
            >
                <img 
                    src={logo}
                    className="logoIcon"
                />
                <p>CrochetMath Studio</p>
            </Link>
            <nav className="navButtons">
                <Link>
                    Studio
                </Link>
                <Link to="/about">
                    About
                </Link>
            </nav>
        </header>
    )
}