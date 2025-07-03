// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/login">Login</Link>
      <Link style={styles.link} to="/signup">Signup</Link>
      <Link style={styles.link} to="/dashboard">Dashboard</Link>    
      <Link style={styles.link} to="/course/1">Sample Course</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "15px",
    padding: "10px",
    backgroundColor: "#282c34",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  }
};

export default Navbar;
