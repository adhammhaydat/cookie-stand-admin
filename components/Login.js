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
    <div className="flex flex-col items-center justify-center bg-green-100 ">
      
      <div className='flex h-screen bg-green-100'>
      <div className='w-full max-w-xs p-5 m-auto bg-green-500 rounded'>
        <header>
          <div className='w-20 mx-auto mb-5' >
          <i className="fad fa-user-circle"></i>
          </div>
        </header>

        <form
        method=""
        onSubmit={(e) => {
          handlesubmit(e);
        }}
        className="flex flex-col items-center justify-center p-10"
      >
        <div className="flex flex-col items-center justify-center">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-2"
          />
        </div>
        <div className="flex flex-col items-center">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" className="p-2" />
        </div>

        <div className="p-2 my-5 w-72">
          <input className='w-full px-4 py-2 mb-6 font-bold text-white bg-green-400 rounded hover:bg-green-700' type="submit" value="Login" />
        </div>
      </form>
        

      </div>
    </div>
    </div>
  );
}
