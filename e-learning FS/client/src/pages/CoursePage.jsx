import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function CoursePage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/courses/${id}`).then((res) => setCourse(res.data));
  }, [id]);

  const enroll = async () => {
    await axios.post(`http://localhost:5000/api/courses/${id}/enroll`);
    alert("Enrolled!");
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {user?.role === "student" && <button onClick={enroll}>Enroll</button>}
      <ul>
        {course.lessons.map((lesson, i) => (
          <li key={i}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}

