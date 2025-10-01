
import React from "react";
import Sidebar from "../../components/layout/Sidebar";

const exams = [
  { id: 1, title: "Mathematics", date: "2025-10-05 10:00 AM", duration: "60 min" },
  { id: 2, title: "Physics", date: "2025-10-07 2:00 PM", duration: "90 min" },
  { id: 3, title: "Computer Science", date: "2025-10-09 11:00 AM", duration: "75 min" },
];

const ManageExams = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="teacher" />

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Manage Exams</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white shadow-sm rounded-xl p-6 border border-[#E2E8F0]"
            >
              <h3 className="text-xl font-semibold text-slate-800">{exam.title}</h3>
              <p className="text-slate-500 mt-2">Date: {exam.date}</p>
              <p className="text-slate-500">Duration: {exam.duration}</p>

              <div className="mt-4 flex space-x-2">
                <button className="flex-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 rounded-lg font-medium">
                  Edit
                </button>
                <button className="flex-1 border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white py-2 rounded-lg font-medium">
                  Delete
                </button>
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium">
                  Submissions
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageExams;
