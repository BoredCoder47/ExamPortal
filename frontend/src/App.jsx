import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";

import DashboardS from "./pages/student/DashboardS";
import ExamPage from "./pages/student/ExamPage";
import Results from "./pages/student/Results";

import DashboardT from "./pages/teacher/DashboardT";
import CreateExam from "./pages/teacher/CreateExam";
import Profile from "./pages/student/ProfileS";
import ExamList from "./pages/student/ExamList";
import ExamInstructions from "./pages/student/ExamInstructions";
import ManageExams from "./pages/teacher/ManageExam";
import Submissions from "./pages/teacher/Submissions";
import ProfileT from "./pages/teacher/ProfileT";
import Grading from "./pages/teacher/Grading";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔐 Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* 🎓 Student Routes */}
        <Route path="/student/dashboard" element={<DashboardS />} />
        <Route path="/student/exam/:id" element={<ExamPage />} />
        <Route path="/student/results" element={<Results />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/exams" element={<ExamList />} />
        <Route path="/student/exam/:id/instructions" element={<ExamInstructions />} />
        {/* (You can later add /student/exams, /student/profile) */}

        {/* 👨‍🏫 Teacher Routes */}
        <Route path="/teacher/dashboard" element={<DashboardT />} />
        <Route path="/teacher/create-exam" element={<CreateExam />} />
        <Route path="/teacher/manage-exams" element={<ManageExams />} />
        <Route path="/teacher/submissions" element={<Submissions />} />
        <Route path="/teacher/profile" element={<ProfileT />} />
        <Route path="/teacher/grading" element={<Grading />} />
        {/* (You can later add /teacher/manage, /teacher/profile) */}

        {/* 🔁 Default Redirect */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
