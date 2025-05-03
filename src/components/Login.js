import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_medium.jpg"
          alt="background-logo"
        />
      </div>
      <form className="w-3/12 absolute my-40 mx-auto right-0 left-0  p-12 bg-black text-white bg-opacity-80">
        <h2 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Signup"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Fullname"
            className="p-4 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full  bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Signup"}
        </button>
        <p className="text-bold cursor-pointer"  onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Signup Now"
            : "Already Register Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
