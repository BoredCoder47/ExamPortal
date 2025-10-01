import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-[#2563EB]">ExamPortal</h1>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-slate-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-[#2563EB]">
            <a href="/forgot-password" className="hover:underline">
              Forgot Password?
            </a>
            <a href="/register" className="hover:underline">
              Register
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 rounded-lg font-medium"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
