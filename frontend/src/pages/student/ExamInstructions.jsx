import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock exam data (can be replaced by API)
const exams = [
  { id: 1, title: "Mathematics", subject: "Math", date: "2025-10-05 10:00 AM", duration: "60 min" },
  { id: 2, title: "Physics", subject: "Science", date: "2025-10-07 2:00 PM", duration: "90 min" },
];

const ExamInstructions = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find exam info
  const exam = exams.find((e) => e.id === parseInt(id)) || {
    title: "Unknown Exam",
    subject: "N/A",
    duration: "N/A",
  };

  const handleStartExam = () => {
    navigate(`/student/exam/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full border border-[#E2E8F0]">
        <h2 className="text-3xl font-bold text-[#2563EB] mb-4">{exam.title}</h2>
        <p className="text-slate-600 mb-2">
          <span className="font-semibold">Subject:</span> {exam.subject}
        </p>
        <p className="text-slate-600 mb-4">
          <span className="font-semibold">Duration:</span> {exam.duration}
        </p>

        <h3 className="text-xl font-semibold text-[#1E293B] mb-3">Instructions</h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 mb-6">
          <li>Read each question carefully before answering.</li>
          <li>Do not refresh the page or close the browser during the exam.</li>
          <li>Each question has only one correct answer.</li>
          <li>Time is limited, and the exam will auto-submit after the duration ends.</li>
          <li>Ensure a stable internet connection.</li>
          <li>Do not navigate to other websites or use unauthorized materials.</li>
        </ul>

        <button
          className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-lg font-medium transition"
          onClick={handleStartExam}
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default ExamInstructions;
