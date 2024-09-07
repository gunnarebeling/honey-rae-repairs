import "./NavBar.css"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to="/tickets">Tickets</Link>
            </li>

        </ul>
    )
}