import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupForm from "./components/SignupForm";
import DashboardPage from "./pages/DashboardPage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
