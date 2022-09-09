import LoginCtrl from "../utils/login_ctrl";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div className="home_container">
        <div className="banner_container">
          <h1>Appointment App</h1>
          <h3>Scheduling that makes your work effortless</h3>
          <Link to="/Login">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
