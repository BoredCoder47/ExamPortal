import React from "react";
import Sidebar from "../../components/layout/Sidebar";

const stats = [
  { title: "Total Exams", count: 12 },
  { title: "Active Exams", count: 5 },
  { title: "Pending Submissions", count: 8 },
];

const recentExams = [
  { title: "Mathematics", date: "2025-10-05 10:00 AM" },
  { title: "Physics", date: "2025-10-07 2:00 PM" },
  { title: "Computer Science", date: "2025-10-09 11:00 AM" },
];

const DashboardT = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
    <Sidebar role="teacher" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1E293B]">Dashboard</h2>
          <p className="text-[#64748B] font-medium">Welcome, Teacher 👋</p>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 border border-[#E2E8F0]"
            >
              <h4 className="text-lg font-semibold text-slate-700">{stat.title}</h4>
              <p className="text-3xl font-bold text-[#2563EB] mt-3">{stat.count}</p>
            </div>
          ))}
        </section>

        {/* Recent Exams */}
        <section>
          <h3 className="text-2xl font-semibold text-[#2563EB] mb-6">Recent Exams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentExams.map((exam, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 border border-[#E2E8F0]"
              >
                <h4 className="text-xl font-semibold text-slate-800">{exam.title}</h4>
                <p className="text-slate-500 mt-2">{exam.date}</p>
                <div className="mt-5 flex space-x-3">
                  <button className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 rounded-lg font-medium transition">
                    View
                  </button>
                  <button className="flex-1 border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white py-2 rounded-lg font-medium transition">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardT;
