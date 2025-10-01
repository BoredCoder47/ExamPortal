import React from "react";
import Sidebar from "../../components/layout/Sidebar";

const submissions = [
  { id: 1, student: "Alice", score: "85%", submittedAt: "2025-10-05 11:00 AM" },
  { id: 2, student: "Bob", score: "92%", submittedAt: "2025-10-05 11:05 AM" },
  { id: 3, student: "Charlie", score: "78%", submittedAt: "2025-10-05 11:10 AM" },
];

const Submissions = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar role="teacher" />

      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Submissions</h2>

        <div className="bg-white shadow-md rounded-xl p-6 border border-[#E2E8F0]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Student</th>
                <th className="border-b p-2">Score</th>
                <th className="border-b p-2">Submitted At</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <tr key={s.id}>
                  <td className="p-2 border-b">{s.student}</td>
                  <td className="p-2 border-b">{s.score}</td>
                  <td className="p-2 border-b">{s.submittedAt}</td>
                  <td className="p-2 border-b space-x-2">
                    <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-1 px-3 rounded-lg font-medium">
                      View
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg font-medium">
                      Grade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Submissions;