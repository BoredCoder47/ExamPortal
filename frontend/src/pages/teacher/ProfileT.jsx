import React from "react";
import Sidebar from "../../components/layout/Sidebar";

const ProfileT = () => {
  const teacher = {
    name: "John Doe",
    email: "johndoe@example.com",
    subject: "Physics",
    role: "Teacher",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="teacher" />

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Profile</h2>

        <div className="bg-white shadow-md rounded-xl p-6 border border-[#E2E8F0] max-w-xl">
          <div className="mb-4">
            <p className="font-semibold text-slate-700">Name:</p>
            <p className="text-slate-800">{teacher.name}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-slate-700">Email:</p>
            <p className="text-slate-800">{teacher.email}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-slate-700">Subject:</p>
            <p className="text-slate-800">{teacher.subject}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-slate-700">Role:</p>
            <p className="text-slate-800">{teacher.role}</p>
          </div>

          <button className="mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 px-6 rounded-lg font-medium">
            Edit Profile
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProfileT;
