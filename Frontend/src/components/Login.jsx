import { useState } from "react";
import "../style/login.css";
import { NavLink } from "react-router-dom";
export default function Login() {
    const[userData,setUserData] = useState();
    const handleLogin = async () => {
    console.log(userData);
    let result = await fetch("http://localhost:3200/login", {
      method: "Post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "Application/Json",
      },
    });
    result = await result.json();
    if (result.success) {
      console.log(result);
      document.cookie = "token = " + result.token;
    }
  };
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
        <button onClick={handleLogin}>Login</button>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </>
  );
}
