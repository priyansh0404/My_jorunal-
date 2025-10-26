import {Link} from "react-router-dom";
import '../style/navbar.css'
export default function NavBar(){
    return(
        <>
            <nav className="navbar">
                <div className="logo">My Journal</div>
                <ul className="nav-links">
                    <li><Link className="navl" to="/">Journal Diary</Link></li>
                    <li><Link className="navl" to="/add-entry">Add new</Link></li>
                </ul>
            </nav>
        </>
    )
}