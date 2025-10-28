import { useState } from "react";
import "../style/signup.css";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [userData, setUserData] = useState([]);

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          placeholder="Enter your name"
          name="name"
        />
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
        <button onClick={()=>console.log(userData)}>Signup</button>
        <NavLink to="/login">Login</NavLink>
      </div>
    </>
  );
}
