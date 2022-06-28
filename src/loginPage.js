import React, { useState } from "react";
import "./loginform.css";
import { db } from "./Firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
// import { Redirect } from "react-router-dom";
// import { Route } from "react-router-dom";

const logoimg =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/crate%20logo%20png.png?alt=media&token=6d61b0a1-a723-43db-aa00-cb66ff26dff8";

const logotext =
  "https://firebasestorage.googleapis.com/v0/b/xsnipp-prot-2.appspot.com/o/fincrates%20word%20png.png?alt=media&token=d1c89c42-d46d-4506-892c-526c2d4031d8";

function Login_Page() {
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  function getUsername(event) {
    setUsername(event.target.value);
  }

  function getPassword(event) {
    setPassword(event.target.value);
  }

  function handlesubmit(event) {
    event.preventDefault();

    const docRef = doc(db, "authentication", username);
    getDoc(docRef).then((doc) => {
      const thedata = doc.data();
      const thepass = thedata["pass"];
      if (thepass == password) {
        console.log("yupp.. my boiii");
      } else {
        console.log("nopp bish LOL fuck off");
      }
    });
  }

  return (
    <div className="App">
      <div className="logoflex">
        <img className="logoimg" src={logoimg}></img>
        <img className="logotxt" src={logotext}></img>
      </div>

      <div className="wholeblock">
        <h3 className="logintext">Admin Login</h3>
        <form className="wholeblock2" onSubmit={handlesubmit}>
          {/* username */}
          <label className="lables">Username: </label>
          <input type="text" name="username" onChange={getUsername}></input>

          {/* password */}

          <label className="lables">Password:</label>
          <input type="password" name="password" onChange={getPassword}></input>
          <br></br>
          <button class="button-12" role="button">
            Login
          </button>
          <br></br>
          <br></br>
          {/* <button className="submit_button">Login</button> */}
        </form>

        <div />
      </div>
    </div>
  );
}

export default Login_Page;
