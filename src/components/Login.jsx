import React, { useContext, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";

function Login() {
  // const { setUsername, setShowProfile } = useContext(LoginContext);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const sendDataToBackend = function () {
    const data = {
      username: username,
      password,
      email,
    };
    axios
      .post(
        "https://altschool-exam-project-d5b35-default-rtdb.firebaseio.com/users.json",
        data
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createLoginDetails = function () {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sendDataToBackend();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="login">
      <form onSubmit={createLoginDetails}>
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password..."
        />
        <button
          type="submit"
          onClick={() => {
          
          }}
        >
          LOGIN
        </button>
      </form>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  );
}

export default Login;

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
