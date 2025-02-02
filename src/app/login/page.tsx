"use client";
import Link from "next/link";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121826]">
      <div className="bg-[#121826] p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-black w-[80%] mx-auto rounded-3xl mb-6 p-1 flex items-center transition-all duration-300 ease-in-out">
          <button
            onClick={toggleForm}
            type="button"
            aria-label="Switch to Sign Up"
            className={`flex-1 text-xl font-bold rounded-3xl text-center p-2 transition-all duration-300 ease-in-out ${
              !isLogin
                ? "bg-white text-black"
                : "bg-transparent text-white text-opacity-65 hover:text-opacity-100"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={toggleForm}
            type="button"
            aria-label="Switch to Login"
            className={`flex-1 text-xl font-bold rounded-3xl text-center p-2 transition-all duration-300 ease-in-out ${
              isLogin
                ? "bg-white text-black"
                : "bg-transparent text-white text-opacity-65 hover:text-opacity-100"
            }`}
          >
            Login
          </button>
        </div>
        <form>
          {isLogin && <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>}
         { isLogin && <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>}
          
         
         {isLogin && <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-sm">
                Remember me
              </label>
            </div>
            <Link
              href="/login"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>}
          {isLogin && <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>}
        </form>
        <div className="mt-6">
          <button className="w-full flex items-center justify-center bg-white text-black py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5 mr-2 "
            />
            Continue with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">
            {isLogin
              ? `Don't have an account?${" "}`
              : `Already have an account?${" "}`}
            <Link
              href="/login"
              className="text-blue-500 hover:underline "
              onClick={toggleForm}
            >
              {!isLogin ? "Log in" : "Sign up"}
            </Link>
          </p>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          {!isLogin
            ? "Use GEC PKD Gmail To Sign Up"
            : "Use GEC PKD Gmail To Log in"}
        </div>
      </div>
    </div>
  );
}
