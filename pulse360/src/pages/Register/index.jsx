"use client";

import { useState } from "react";

const RegisterPage = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        adminKey: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }

    const validateForm = (data) => {
        const errors = {};

        // Username validation (min 5 characters)
        if (!data.username || data.username.length < 5) {
            errors.username = "Username must be at least 5 characters long.";
        }

        // Email validation (basic pattern check)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailPattern.test(data.email)) {
            errors.email = "Enter a valid email address.";
        }

        // Admin Key validation (required)
        if (!data.adminKey) {
            errors.adminKey = "Admin Key is required.";
        }

        // Password validation
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!data.password || !passwordPattern.test(data.password)) {
            errors.password = "Password must be at least 8 characters, include one uppercase letter, one number, and one special character.";
        }

        // Confirm password validation
        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Passwords do not match.";
        }

        return errors;
    };

    async function registerAccount(event) {
        event.preventDefault();
        setErrors({});
        setSuccessMessage("");
        setErrorMessage("");

        const validationErrors = validateForm(registerData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            // Replace with your API endpoint
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });

            if (!response.ok) {
                throw new Error("Registration failed. Please try again.");
            }

            const result = await response.json();
            setSuccessMessage("Registration successful! Please check your email for confirmation.");
            setRegisterData({
                username: "",
                email: "",
                adminKey: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-indigo-600">LOGO</h1>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
                    Administrator Registration
                </h2>
                <p className="text-gray-500 text-center mb-6">
                    Create your administrator account
                </p>

                {/* Form Fields */}
                <form onSubmit={registerAccount}>
                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Username</label>
                        <div className="relative">
                            <input onChange={handleChange} name="username" id="username"
                                   type="text"
                                   placeholder="Enter username (min. 5 characters)"
                                   className="mt-1 w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                            <span className="absolute left-3 top-3 text-gray-500">👤</span>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Email address</label>
                        <div className="relative">
                            <input onChange={handleChange} name="email" id="email"
                                   type="email"
                                   placeholder="Enter your email"
                                   className="mt-1 w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                            <span className="absolute left-3 top-3 text-gray-500">📧</span>
                        </div>
                    </div>

                    {/* Admin Key */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Admin Key</label>
                        <div className="relative">
                            <input onChange={handleChange} name="adminKey" id="adminKey"
                                   type="text"
                                   placeholder="Enter admin key"
                                   className="mt-1 w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                            <span className="absolute left-3 top-3 text-gray-500">🔑</span>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Password</label>
                        <div className="relative">
                            <input onChange={handleChange} name="password" id="password"
                                   type="password"
                                   placeholder="Enter password"
                                   className="mt-1 w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                            <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                        </div>
                        <ul className="text-xs text-gray-500 mt-1">
                            <li>✔ At least 8 characters</li>
                            <li>✔ One uppercase letter</li>
                            <li>✔ One number</li>
                            <li>✔ One special character</li>
                        </ul>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Confirm Password</label>
                        <div className="relative">
                            <input onChange={handleChange} name="confirmPassword" id="confirmPassword"
                                   type="password"
                                   placeholder="Confirm your password"
                                   className="mt-1 w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                            />
                            <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                            Register Account
                        </button>
                        <button
                            type="reset"
                            className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition">
                            Clear Form
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account? <a href="#" className="text-indigo-600 hover:underline">Sign in
                        here</a>
                    </p>
                </form>

                {/* Support Info */}
                <div className="text-center text-sm text-gray-500 mt-6">
                    <p>Need help? Contact technical support at</p>
                    <p className="font-semibold">support@hospital.com</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
