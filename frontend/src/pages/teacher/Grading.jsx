import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";

// Mock submissions
const submissions = [
  {
    id: 1,
    student: "Alice",
    mcqAnswers: [
      { question: "Capital of France?", answer: "Paris", correct: "Paris", marks: 2 },
      { question: "2 + 2?", answer: "4", correct: "4", marks: 1 },
    ],
    descriptiveAnswers: [
      { question: "Explain Newton's first law.", answer: "An object remains at rest or in uniform motion unless acted upon by an external force." },
      { question: "Describe photosynthesis.", answer: "Process in plants where sunlight is converted into chemical energy in chloroplasts." },
    ],
  },
  {
    id: 2,
    student: "Bob",
    mcqAnswers: [
      { question: "Capital of France?", answer: "Berlin", correct: "Paris", marks: 2 },
      { question: "2 + 2?", answer: "4", correct: "4", marks: 1 },
    ],
    descriptiveAnswers: [
      { question: "Explain Newton's first law.", answer: "Every object continues its state of motion unless a force changes it." },
      { question: "Describe photosynthesis.", answer: "Plants convert sunlight into glucose using chlorophyll and carbon dioxide." },
    ],
  },
];

const UnifiedGrading = () => {
  const navigate = useNavigate();
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [descriptiveGrades, setDescriptiveGrades] = useState({}); // { studentId: { questionIndex: marks } }

  const student = submissions[currentStudentIndex];
  const studentGrades = descriptiveGrades[student.id] || {};

  const handleGradeChange = (index, value) => {
    setDescriptiveGrades({
      ...descriptiveGrades,
      [student.id]: {
        ...studentGrades,
        [index]: Number(value),
      },
    });
  };

  const totalMCQMarks = student.mcqAnswers.reduce((acc, q) => {
    return acc + (q.answer === q.correct ? q.marks : 0);
  }, 0);

  const totalDescriptiveMarks = Object.values(studentGrades).reduce((acc, val) => acc + (val || 0), 0);

  const handleSubmit = () => {
    console.log("All Descriptive Grades:", descriptiveGrades);

    if (currentStudentIndex < submissions.length - 1) {
      setCurrentStudentIndex(currentStudentIndex + 1);
    } else {
      alert("All students graded!");
      navigate("/teacher/submissions");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="teacher" />

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-2">
          Grading: {student.student}
        </h2>
        <p className="text-slate-500 mb-6">
          Student {currentStudentIndex + 1} of {submissions.length}
        </p>

        {/* MCQ Section */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-[#E2E8F0] mb-6">
          <h3 className="text-xl font-semibold text-[#2563EB] mb-4">MCQ Answers</h3>
          {student.mcqAnswers.map((q, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-semibold text-slate-800">{idx + 1}. {q.question}</p>
              <p className={`p-3 border rounded-lg ${
                q.answer === q.correct ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
              }`}>
                Your Answer: {q.answer} {q.answer === q.correct ? "(Correct)" : "(Incorrect)"} | Marks: {q.answer === q.correct ? q.marks : 0}
              </p>
            </div>
          ))}
          <p className="font-medium text-slate-700">MCQ Total Marks: {totalMCQMarks}</p>
        </div>

        {/* Descriptive Section */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-[#E2E8F0]">
          <h3 className="text-xl font-semibold text-[#2563EB] mb-4">Descriptive Answers</h3>
          {student.descriptiveAnswers.map((q, idx) => (
            <div key={idx} className="mb-4">
              <p className="font-semibold text-slate-800 mb-2">{idx + 1}. {q.question}</p>
              <textarea
                readOnly
                value={q.answer}
                className="w-full p-4 border border-[#E2E8F0] rounded-lg text-slate-700 mb-2 h-36 resize-y overflow-y-auto"
              />
              <input
                type="number"
                min="0"
                placeholder="Marks"
                value={studentGrades[idx] || ""}
                onChange={(e) => handleGradeChange(idx, e.target.value)}
                className="border border-[#E2E8F0] rounded-lg px-3 py-2 w-32"
              />
            </div>
          ))}
          <p className="font-medium text-slate-700 mt-2">Descriptive Total Marks: {totalDescriptiveMarks}</p>
          <p className="font-bold text-lg mt-2">Total Marks: {totalMCQMarks + totalDescriptiveMarks}</p>

          <button
            onClick={handleSubmit}
            className="mt-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 px-6 rounded-lg font-medium"
          >
            {currentStudentIndex < submissions.length - 1 ? "Next Student" : "Finish Grading"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default UnifiedGrading;
