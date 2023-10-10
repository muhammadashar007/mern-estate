import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3 border rounded-lg shadow-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="p-3 border rounded-lg shadow-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="p-3 border rounded-lg shadow-lg"
        />
        <button className="bg-slate-700 p-3 border rounded-lg text-white hover:opacity-95 disabled:opacity-80 uppercase">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>
          Have an account?{" "}
          <Link to="/sign-in" className="text-blue-700">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
