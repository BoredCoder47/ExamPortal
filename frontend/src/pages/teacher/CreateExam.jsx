import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";

const CreateExam = () => {
  const [questions, setQuestions] = useState([
    {
      type: "mcq", // "mcq" or "descriptive"
      question: "",
      options: ["", "", "", ""],
      correct: "",
    },
  ]);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const handleCorrectChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].correct = value;
    setQuestions(newQuestions);
  };

  const handleTypeChange = (qIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].type = value;
    if (value === "descriptive") {
      newQuestions[qIndex].options = [];
      newQuestions[qIndex].correct = "";
    } else if (value === "mcq" && newQuestions[qIndex].options.length === 0) {
      newQuestions[qIndex].options = ["", "", "", ""];
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { type: "mcq", question: "", options: ["", "", "", ""], correct: "" },
    ]);
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ questions });
    alert("Exam created! (UI only)");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="teacher" />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-[#2563EB] mb-6">Create Exam</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Exam Details */}
          <div className="bg-white shadow-md rounded-xl p-6 border border-[#E2E8F0]">
            <h2 className="text-xl font-semibold text-[#2563EB] mb-4">Exam Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Exam Title"
                className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB]"
              />
              <input
                type="text"
                placeholder="Subject / Category"
                className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB]"
              />
              <input
                type="number"
                placeholder="Duration (minutes)"
                className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB]"
              />
              <input
                type="number"
                placeholder="Total Marks"
                className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB]"
              />
              <input
                type="datetime-local"
                className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB] md:col-span-2"
              />
            </div>
          </div>

          {/* Questions */}
          {questions.map((q, qIndex) => (
            <div
              key={qIndex}
              className="bg-white shadow-md rounded-xl p-6 border border-[#E2E8F0]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  Question {qIndex + 1}
                </h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(qIndex)}
                    className="text-[#DC2626] hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Question Type */}
              <select
                value={q.type}
                onChange={(e) => handleTypeChange(qIndex, e.target.value)}
                className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB] mb-4"
              >
                <option value="mcq">MCQ</option>
                <option value="descriptive">Descriptive</option>
              </select>

              {/* Question Text */}
              <input
                type="text"
                placeholder="Question Text"
                value={q.question}
                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB] mb-4"
              />

              {/* MCQ Options */}
              {q.type === "mcq" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {q.options.map((opt, oIndex) => (
                      <input
                        key={oIndex}
                        type="text"
                        placeholder={`Option ${oIndex + 1}`}
                        value={opt}
                        onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                        className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB]"
                      />
                    ))}
                  </div>

                  <select
                    value={q.correct}
                    onChange={(e) => handleCorrectChange(qIndex, e.target.value)}
                    className="p-3 border border-[#E2E8F0] rounded-lg focus:ring-2 focus:ring-[#2563EB]"
                  >
                    <option value="">Select Correct Answer</option>
                    {q.options.map((opt, oIndex) => (
                      <option key={oIndex} value={opt}>
                        {opt || `Option ${oIndex + 1}`}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {/* Descriptive placeholder (optional notes) */}
              {q.type === "descriptive" && (
                <textarea
                  placeholder="Answer will be descriptive. No options required."
                  disabled
                  className="w-full p-3 border border-[#E2E8F0] rounded-lg text-slate-600 bg-gray-50"
                />
              )}
            </div>
          ))}

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={addQuestion}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-2 px-4 rounded-lg font-medium"
            >
              Add Question
            </button>
            <button
              type="submit"
              className="bg-[#16A34A] hover:bg-[#15803D] text-white py-2 px-4 rounded-lg font-medium"
            >
              Save Exam
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateExam;
