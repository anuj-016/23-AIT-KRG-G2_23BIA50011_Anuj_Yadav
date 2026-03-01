import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Dashboard = () => {
  const navigate = useNavigate();
  const {setIsAuthenticated}=useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 20px",
          background: "#aaccfd",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div>
          <Link to="/dashboard" style={{ marginRight: "15px" }}>
            Dashboard
          </Link>
          <Link to="water">Water Tracker</Link>
        </div>

        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div style={{ padding: "10px" }}>
        <h2>Welcome to EcoTrack 👋</h2>

        <p>
          Track your daily wellness habits and stay hydrated.
        </p>
      </div>

      <Outlet />
    </div>
  );
};

export default Dashboard;