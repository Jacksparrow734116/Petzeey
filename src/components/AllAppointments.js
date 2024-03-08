import React from "react";
import "../App.css";
import Appointmentcard from "./Appointment";
import { Link } from "react-router-dom";
function AllAppointments() {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="allAppointments">
          <h3>All Appointments</h3>
        </div>
        <div className="appointment-filters">
          <div className="select-dates">
            <button>Select dates</button>
          </div>
          <div className="status">
            <select>
              <option>Status</option>
              <option>Approved</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="doctor-name">
            <select>
              <option>Dr.John Doe</option>
              <option>Dr.Henry Doe</option>
              <option>Dr.Doe Harry</option>
            </select>
          </div>
          <div className="new-appointment">
            <Link to="/newAppointment">
              <button>+ New Appointment</button>
            </Link>
          </div>
        </div>
      </div>

      <hr id="hori"></hr>
      <div className="display-Appointments">
        <Appointmentcard />
      </div>
    </div>
  );
}
export default AllAppointments;
