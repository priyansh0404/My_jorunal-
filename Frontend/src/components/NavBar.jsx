import {Link} from "react-router-dom";
import '../style/navbar.css'
import { useState } from "react";
export default function NavBar(){
    const[login,setLogin] = useState(localStorage.getItem('login'));
    return(
        <>
            <nav className="navbar">
                <div className="logo">My Journal</div>
                <ul className="nav-links">
                    {
                        login?
                        <>
                            <li><Link className="navl" to="/">Journal Diary</Link></li>
                    <li><Link className="navl" to="/add-entry">Add new</Link></li>
                    <li><Link className="navl" to="/login">Log Out</Link></li>
                        </>:null
                    }
                </ul>
            </nav>
        </>
    )
}