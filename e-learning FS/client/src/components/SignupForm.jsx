import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "student" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register", form,
      {
        withCredentials: true
      }
    );
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
}