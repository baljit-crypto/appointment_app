import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function SelectMode() {
  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Appointment App</h1>
        </div>
        <div className="content">
          <Link to="/GetMode">
            <Button className="btn grl-button">Get Appointment</Button>
          </Link>
          <span>Or</span>
          <Link to="/GiveMode">
            <Button className="btn grl-button">Give Appointment</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SelectMode;
