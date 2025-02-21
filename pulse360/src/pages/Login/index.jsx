"use client";

import { useState } from "react";

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const validateForm = (data) => {
        const errors = {};

        // Username validation (required)
        if (!data.username) {
            errors.username = "User  ID is required.";
        }

        // Password validation (required)
        if (!data.password) {
            errors.password = "Password is required.";
        }

        return errors;
    };

    async function handleLogin(event) {
        event.preventDefault();
        setErrors({});
        setSuccessMessage("");
        setErrorMessage("");

        const validationErrors = validateForm(loginData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            // Replace with your API endpoint
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                throw new Error("Login failed. Please check your credentials.");
            }

            const result = await response.json();
            setSuccessMessage("Login successful! Redirecting...");
            // Handle successful login (e.g., redirect to dashboard)
            // window.location.href = "/dashboard"; // Uncomment this line to redirect
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
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

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="mb-4 text-red-600 text-sm text-center">
                            {errorMessage}
                        </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <div className="mb-4 text-green-600 text-sm text-center">
                            {successMessage}
                        </div>
                    )}

                    {/* User ID Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">User  ID</label>
                        <input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="Enter your user ID"
                            className={`mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none ${errors.username ? 'border-red-500' : ''}`}
                        />
                        {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Password</label>
                        <input
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className={`mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none ${errors.password ? 'border-red-500' : ''}`}
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                    </div>

                    {/* Sign In Button */}
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className={`w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? "Signing In..." : "Sign In"}
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
                    <a href="#" className="hover:underline font-bold">Do not have credentials? Register</a>
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