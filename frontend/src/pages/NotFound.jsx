import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] px-4">
      <h1 className="text-6xl font-bold text-[#2563EB] mb-4">404</h1>
      <p className="text-xl text-slate-700 mb-6">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-medium"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
