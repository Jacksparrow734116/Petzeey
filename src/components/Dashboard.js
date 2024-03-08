import React from "react";
import Profile from "./Profile";
import "../App.css";
import AllAppointments from "./AllAppointments";
import Sidebar from "./sSidebar";
const Dashboard=()=>{
    return (
        <div className="dashboard-files">
          <Profile/>
          <Sidebar />
          <AllAppointments />
        </div>
    );
 }

export default Dashboard;