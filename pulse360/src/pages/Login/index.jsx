"use client"
import {useState} from "react";

const LoginPage = () => {
    const [loginData,setLoginData] = useState({});




    function handleChange(e) {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    }
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Section - Login Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-indigo-600">LOGO</h1>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
                        Hospital Admin Portal
                    </h2>
                    <p className="text-gray-500 text-center mb-6">
                        Please sign in to your account
                    </p>

                    {/* User ID Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">User ID</label>
                        <input onChange={handleChange} name="username"
                            type="text"
                            placeholder="Enter your user ID"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Password</label>
                        <input onChange={handleChange} name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                        Sign In
                    </button>

                    {/* Forgot Password & Version */}
                    <div className="flex justify-between text-sm text-gray-500 mt-4">
                        <a href="#" className="hover:underline">Forgot your password?</a>
                        <span>Version 2.1.0</span>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-6 text-sm text-gray-500 flex flex-col">
                    © 2024 Hospital Management System. All rights reserved.
                    <a href="" className="hover:underline font-bold">Do not have credentials? Register</a>
                </footer>
            </div>

            {/* Right Section - Background Image */}
            <div className="hidden md:block md:w-1/2 h-screen">
                <img
                    src="/assets/Login/img.png"
                    alt="Hospital Background"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default LoginPage;
