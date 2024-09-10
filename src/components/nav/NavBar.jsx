import "./NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link className="navbar-link" to="/tickets">Tickets</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/employees">Employees</Link>
            </li>
            <li className="navbar-item">
                <Link className="navbar-link" to="/customers">Customers</Link>
            </li>
            {localStorage.getItem("honey_user") ? (
            <li className="navbar-item navbar-logout">
                <Link
                className="navbar-link"
                to=""
                onClick={() => {
                    localStorage.removeItem("honey_user")
                    navigate("/", { replace: true })
                }}
                >
                Logout
                </Link>
            </li>
            ) : (
            ""
            )}

        </ul>
    )
}