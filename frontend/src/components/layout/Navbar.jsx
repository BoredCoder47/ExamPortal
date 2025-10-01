import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ role }) => {
  const location = useLocation();

  const links = role === "teacher"
    ? [
        { name: "Dashboard", path: "/teacher/dashboard" },
        { name: "Create Exam", path: "/teacher/create-exam" },
        { name: "Manage Exams", path: "/teacher/manage-exams" },
        { name: "Submissions", path: "/teacher/submissions" },
        { name: "Profile", path: "/teacher/profile" },
      ]
    : [
        { name: "Dashboard", path: "/student/dashboard" },
        { name: "Exams", path: "/student/exams" },
        { name: "Results", path: "/student/results" },
        { name: "Profile", path: "/student/profile" },
      ];

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center border-b border-[#E2E8F0]">
      <div className="text-2xl font-bold text-[#2563EB]">ExamPortal</div>

      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`font-medium ${
                location.pathname === link.path
                  ? "text-[#2563EB] border-b-2 border-[#2563EB]"
                  : "text-[#1E293B] hover:text-[#2563EB]"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-1 rounded-lg font-medium">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
