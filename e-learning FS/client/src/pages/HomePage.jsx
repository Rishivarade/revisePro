import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses").then((res) => setCourses(res.data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((c) => (
        <div key={c._id}>
          <Link to={`/course/${c._id}`}><h3>{c.title}</h3></Link>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
}
