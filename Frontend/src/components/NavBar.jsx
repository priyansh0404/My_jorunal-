import { Link,  useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { useState } from "react";
import { useEffect } from "react";
export default function NavBar() {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    setLogin(null);
    setTimeout(()=>{
        navigate('/login');
    },0)
  };
  useEffect(() => {
    const handleStorage = () => {
      setLogin(localStorage.getItem("login"));
    };
    window.addEventListener('localStorage-event', handleStorage);
    return () => {
      window.removeEventListener('localStorage-event', handleStorage);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">My Journal</div>
        <ul className="nav-links">
          {login ? (
            <>
              <li>
                <Link className="navl" to="/">
                  Journal Diary
                </Link>
              </li>
              <li>
                <Link className="navl" to="/add-entry">
                  Add new
                </Link>
              </li>
              <li>
                <Link className="navl" onClick={logout} to="/login">
                  Log Out
                </Link>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
    </>
  );
}
