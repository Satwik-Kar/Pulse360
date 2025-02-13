const RegisterPage = () => {
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
                <form>
                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium">Username</label>
                        <div className="relative">
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                            <input
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
                        Already have an account? <a href="#" className="text-indigo-600 hover:underline">Sign in here</a>
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
