import { useState } from "react";
import "../style/login.css";
import { NavLink } from "react-router-dom";
export default function Login() {
    const[userData,setUserData] = useState();
  return (
    <>
      <div className="logincontainer">
        <h1>Login</h1>
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          placeholder="Enter yoour email"
          name="email"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={(event) =>
            setUserData({ ...userData, password: event.target.value })
          }
          placeholder="Enter your password"
          name="password"
        />
        <button onClick={()=>console.log(userData)}>Login</button>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </>
  );
}
