import React, { useState, useEffect } from "react";

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "JavaScript", "Java"],
  },
  {
    id: 3,
    question: "Who wrote '1984'?",
    options: ["Aldous Huxley", "George Orwell", "J.K. Rowling", "Mark Twain"],
  },
];

const ExamPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    console.log("Exam submitted:", answers);
    alert("Exam submitted! (UI only)");
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const question = sampleQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 flex justify-center">
      <div className="w-full max-w-3xl relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-[#2563EB]">
            Sample Exam
          </h1>
          <div className="text-lg font-medium text-[#1E293B]">
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Q{currentQuestion + 1}: {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((opt) => (
              <label
                key={opt}
                className={`block p-3 border rounded-lg cursor-pointer ${
                  answers[currentQuestion] === opt
                    ? "border-[#2563EB] bg-blue-50"
                    : "border-[#E2E8F0] hover:border-[#2563EB]"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={opt}
                  checked={answers[currentQuestion] === opt}
                  onChange={() => handleOptionSelect(opt)}
                  className="mr-3"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mb-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white border border-[#2563EB] text-[#2563EB] rounded-lg hover:bg-[#2563EB] hover:text-white"
          >
            Previous
          </button>
          {currentQuestion === sampleQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8]"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8]"
            >
              Next
            </button>
          )}
        </div>

        {/* Question Number Indicators */}
        <div className="flex space-x-2 justify-center mb-6">
          {sampleQuestions.map((_, idx) => (
            <div
              key={idx}
              className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                answers[idx]
                  ? "bg-[#2563EB] text-white border-[#2563EB]"
                  : "border-[#E2E8F0] text-[#64748B]"
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>

        {/* Proctoring Placeholder */}
        <div className="absolute top-6 right-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-[#64748B]">
          Webcam
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
