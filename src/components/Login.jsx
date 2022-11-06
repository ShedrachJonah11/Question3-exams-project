import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  const createLoginDetails = function (){
  }
  
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
        <input type="text" placeholder="Password..." />
        <button
          type="submit"
          onClick={() => {
            setShowProfile(true);
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
