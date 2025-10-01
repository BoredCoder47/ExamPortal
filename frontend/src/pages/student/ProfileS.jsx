import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E2E8F0] shadow-md p-6">
        <h1 className="text-2xl font-bold text-[#2563EB] mb-10">ExamPortal</h1>
        <nav className="space-y-4">
          <a
            href="/student/dashboard"
            className="block text-[#1E293B] hover:text-[#2563EB] font-medium transition-colors"
          >
            Dashboard
          </a>
          <a
            href="/student/exams"
            className="block text-[#1E293B] hover:text-[#2563EB] font-medium transition-colors"
          >
            Exams
          </a>
          <a
            href="/student/results"
            className="block text-[#1E293B] hover:text-[#2563EB] font-medium transition-colors"
          >
            Results
          </a>
          <a
            href="/student/profile"
            className="block text-[#2563EB] font-semibold transition-colors"
          >
            Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-[#1E293B]">Profile</h2>
          <p className="text-[#64748B] mt-1">Manage your account information</p>
        </header>

        <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-sm p-8 max-w-3xl">
          {/* Avatar */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-[#DBEAFE] flex items-center justify-center text-[#2563EB] text-3xl font-bold">
              S
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#1E293B]">Student Name</h3>
              <p className="text-[#64748B]">student@example.com</p>
              <p className="text-[#64748B] text-sm mt-1">Role: Student</p>
            </div>
          </div>

          {/* Profile Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Student Name"
                className="w-full border border-[#CBD5E1] rounded-lg p-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="student@example.com"
                className="w-full border border-[#CBD5E1] rounded-lg p-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full border border-[#CBD5E1] rounded-lg p-2 focus:ring-2 focus:ring-[#2563EB] outline-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium px-6 py-2 rounded-lg transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;
