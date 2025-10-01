import React from "react";


const Results = () => {
  const sampleResults = [
    {
      id: 1,
      examName: "Maths Midterm",
      date: "2025-09-25",
      score: 85,
      total: 100,
      status: "Passed",
    },
    {
      id: 2,
      examName: "Science Quiz",
      date: "2025-09-18",
      score: 72,
      total: 100,
      status: "Passed",
    },
    {
      id: 3,
      examName: "History Test",
      date: "2025-09-10",
      score: 45,
      total: 100,
      status: "Failed",
    },
  ];

  return <div className="p-3">
      <h1 className="text-2xl font-bold text-[#2563EB] mb-4">My Results</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50 text-[#2563EB]">
              <th className="py-3 px-4 border-b">#</th>
              <th className="py-3 px-4 border-b">Exam Name</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Score</th>
              <th className="py-3 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleResults.map((result, index) => (
              <tr
                key={result.id}
                className="hover:bg-blue-50 transition duration-150"
              >
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b font-medium text-gray-800">
                  {result.examName}
                </td>
                <td className="py-3 px-4 border-b text-gray-600">{result.date}</td>
                <td className="py-3 px-4 border-b text-gray-800">
                  {result.score}/{result.total}
                </td>
                <td
                  className={`py-3 px-4 border-b font-semibold ${
                    result.status === "Passed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {result.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
};

export default Results;
