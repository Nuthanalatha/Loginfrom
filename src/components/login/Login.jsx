import React, { useState } from "react";
import "./Login.css";

function Login() {
  let [login, setLogin] = useState({
    userName: "",
    password: "",
  });

  let [printData, setPrintData] = useState({
    printUserName: "",
    printPassword: "",
  });

  const loginFunc = (e) => {
    // console.log(e);
    e.preventDefault();
    const loginCopy = { ...login };
    loginCopy[e.target.name] = e.target.value;
    console.log(loginCopy, "login copy");
    setLogin(loginCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrintData({
      ...printData,
      printUserName: login.userName,
      printPassword: login.password,
    });
    //console.log(login);

    localStorage.setItem("userName", login.userName);
    localStorage.setItem("password", login.password);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="" className="lb1">
          User Name:
        </label>
        <input
          type="text"
          className="inp1"
          onChange={loginFunc}
          name="userName"
          value={login.userName}
        />
        <label htmlFor="" className="lb2">
          Password:
        </label>
        <input
          type="text"
          className="inp2"
          onChange={loginFunc}
          name="password"
          value={login.password}
        />
        <button type="submit">Login</button>
        <br></br>
        <button
          onClick={() => {
            localStorage.clear();
          }}
        >
          LogOut
        </button>
      </form>
      {/* <p>{printData.printUserName}</p>
      <p>{printData.printPassword}</p> */}
      <p>{localStorage.getItem("userName")}</p>
      <p>{localStorage.getItem("password")}</p>
    </div>
  );
}

export default Login;
