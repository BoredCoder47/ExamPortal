import React from "react";
import Sidebar from "../../components/layout/Sidebar";

const upcomingExams = [
  { title: "Mathematics", date: "2025-10-05 10:00 AM" },
  { title: "Physics", date: "2025-10-07 2:00 PM" },
  { title: "Computer Science", date: "2025-10-09 11:00 AM" },
];

const recentResults = [
  { title: "Chemistry", score: "85%", date: "2025-09-20" },
  { title: "Biology", score: "92%", date: "2025-09-18" },
];

const DashboardS = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="student" />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1E293B]">Dashboard</h2>
          <p className="text-[#64748B] font-medium">Welcome, Student 👋</p>
        </header>

        {/* Upcoming Exams */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-[#2563EB] mb-6">Upcoming Exams</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingExams.map((exam, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 border border-[#E2E8F0]"
              >
                <h4 className="text-xl font-semibold text-slate-800">{exam.title}</h4>
                <p className="text-slate-500 mt-2">{exam.date}</p>
                <button className="mt-5 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 rounded-lg font-medium transition">
                  Start Exam
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Results */}
        <section>
          <h3 className="text-2xl font-semibold text-[#2563EB] mb-6">Recent Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentResults.map((result, idx) => (
              <div
                key={idx}
                className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 border border-[#E2E8F0]"
              >
                <h4 className="text-xl font-semibold text-slate-800">{result.title}</h4>
                <p className="text-slate-600 mt-3 font-medium">
                  Score: <span className="text-[#2563EB] font-semibold">{result.score}</span>
                </p>
                <p className="text-slate-500 mt-1 text-sm">{result.date}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardS;
