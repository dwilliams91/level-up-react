import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
console.log("this is a change")
export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <Link className="nav-link" to="/games">Games</Link>

            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="navbar__item">

            </li>
            {
                (localStorage.getItem("lu_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("lu_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
