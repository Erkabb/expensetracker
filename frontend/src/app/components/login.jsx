
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="w-full h-full flex">
      <div className="w-2/4 h-screen bg-white flex items-center ">
        <div className="w-[426px] h-[384px] flex flex-col items-center justify-center gap-10 m-auto">
          <div className="flex">
            <img src="./Vector.png" alt="" />
            <p className="text-black">Geld</p>
          </div>
         <div className="text-center text-black"><h1 className="text-2xl"><strong>Welcome Back</strong></h1>
            <p> Please enter your details</p></div> 
            <div className="flex flex-col gap-4">
        <label className="input input-bordered flex items-center gap-2 bg-white">
         
            <input
              type="text"
              className="grow"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 bg-white">
           
            <input
              type="text"
              className="grow"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            </label>
            <button className="btn btn-wide bg-blue-700">Log in</button>
          </div>
          <div className="flex gap-3"><h2>Don't have an account? </h2><p className="text-blue-200">Sign up</p></div>
        </div>
      
      </div>

      <div className="w-2/4 h-screen bg-blue-500"></div>
    </div>
  );
};

export default Login;
