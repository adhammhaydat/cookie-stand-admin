import React from "react";

export default function Login({ login,user }) {
  function handlesubmit(e) {
    e.preventDefault();
    let userData = {
      userName: e.target.username.value,
      password: e.target.password.value,
    };

    login(userData.userName, userData.password);
   
  }
  
  return (
    <div className="flex flex-col items-center justify-center bg-green-100 my-28">
      <form
        method=""
        onSubmit={(e) => {
          handlesubmit(e);
        }}
        className="flex flex-col items-center justify-center p-10"
      >
        <div className="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input type="password" name="password" className="p-2" />
        </div>

        <div className="flex flex-col p-2 my-5">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
