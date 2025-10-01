import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";

// Mock exam data
const exams = [
  { id: 1, title: "Mathematics", subject: "Math", date: "2025-10-05 10:00 AM", duration: "60 min" },
  { id: 2, title: "Physics", subject: "Science", date: "2025-10-07 2:00 PM", duration: "90 min" },
  { id: 3, title: "Computer Science", subject: "CS", date: "2025-10-09 11:00 AM", duration: "75 min" },
  { id: 4, title: "Chemistry", subject: "Science", date: "2025-10-12 9:00 AM", duration: "60 min" },
];

const ExamList = () => {
  const navigate = useNavigate();

  const handleStartExam = (id) => {
    navigate(`/student/exam/${id}/instructions`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="student" />

      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#1E293B]">Available Exams</h2>
          <p className="text-[#64748B] font-medium">Select an exam to start</p>
        </header>

        {/* Exam Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white shadow-sm hover:shadow-md transition rounded-xl p-6 border border-[#E2E8F0]"
            >
              <h3 className="text-xl font-semibold text-slate-800">{exam.title}</h3>
              <p className="text-slate-500 mt-2">Subject: {exam.subject}</p>
              <p className="text-slate-500">Date: {exam.date}</p>
              <p className="text-slate-500">Duration: {exam.duration}</p>
              <button
                className="mt-5 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 rounded-lg font-medium transition"
                onClick={() => handleStartExam(exam.id)}
              >
                Start Exam
              </button>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ExamList;
