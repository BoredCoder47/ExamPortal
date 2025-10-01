import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ role }) => {
  const location = useLocation();

  const studentLinks = [
    { name: "Dashboard", path: "/student/dashboard" },
    { name: "Exams", path: "/student/exams" },
    { name: "Results", path: "/student/results" },
    { name: "Profile", path: "/student/profile" },
  ];

  const teacherLinks = [
    { name: "Dashboard", path: "/teacher/dashboard" },
    { name: "Create Exam", path: "/teacher/create-exam" },
    { name: "Manage Exams", path: "/teacher/manage-exams" },
    { name: "Submissions", path: "/teacher/submissions" },
    { name: "Profile", path: "/teacher/profile" },
  ];

  const links = role === "teacher" ? teacherLinks : studentLinks;
  console.log(role);
  return (
    <aside className="w-64 bg-white border-r border-[#E2E8F0] shadow-sm p-6">
      <h1 className="text-2xl font-semibold text-[#2563EB] mb-8">ExamPortal</h1>
      <nav className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block font-medium px-2 py-1 rounded hover:text-[#2563EB] hover:bg-blue-50 ${
              location.pathname === link.path
                ? "text-[#2563EB] bg-blue-100"
                : "text-[#1E293B]"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
