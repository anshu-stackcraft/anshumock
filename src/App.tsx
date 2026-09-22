import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import ExamDetails from "./pages/ExamDetails";
import Syllabus from "./pages/Syllabus";
import Subjects from "./pages/Subjects";
import Practice from "./pages/Practice";
import PracticeTest from "./pages/PracticeTest";
import MockTests from "./pages/MockTests";
import MockExam from "./pages/MockExam";
import Result from "./pages/Result";
import Notes from "./pages/Notes";
import PreviousPapers from "./pages/PreviousPapers";
import Performance from "./pages/Performance";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Exams */}
        <Route path="/exams" element={<Exams />} />
        <Route path="/exams/:examId" element={<ExamDetails />} />

        {/* Exam Syllabus */}
        <Route path="/syllabus/:examId" element={<Syllabus />} />

        {/* Subjects */}
        <Route path="/subjects/:examId" element={<Subjects />} />

        {/* Practice */}
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/:topicId" element={<PracticeTest />} />

        {/* Mock Tests */}
        <Route path="/mock-tests" element={<MockTests />} />
        <Route path="/mock/:mockId" element={<MockExam />} />

        {/* Result */}
        <Route path="/result/:attemptId" element={<Result />} />

        {/* Notes */}
        <Route path="/notes" element={<Notes />} />

        {/* Previous Year Papers */}
        <Route path="/previous-papers" element={<PreviousPapers />} />

        {/* Performance */}
        <Route path="/performance" element={<Performance />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* 404 → Home */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}