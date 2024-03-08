import React,{useState,useEffect} from "react";
import pet from "../Images/pet.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate} from "react-router-dom";


function Appointmentcard() {
const navigate=useNavigate();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/appointments")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) =>{ setAppointments(data);
  })
     
      .catch((error) => console.error("Error fetching appointments:", error));
  }, []);

const handleGame=(index)=>{
  navigate(`/review/${appointments[index].id}`);
}
  
  return (
    <div className="appointment">
     {appointments && appointments.length > 0 ? (
      appointments.map((appointment,index)=>(

        <div key={appointment.id} className="appointment-card">
             
        <div className="appoint">
          <div className="pet-info">
            <img id="pet-image" src={pet}></img>
            <div className="pet">
              <p>{appointment.name}</p>
              <p>{appointment.gender}, {appointment.age} years</p>

              <p>Owner:{appointment.owner}</p>
            </div>
          </div>
          <div className="appointment-timings">
            <div className="appointment-date-time">
              <p>{appointment.time}</p>
              <p>12-02-24</p>
            </div>
            <div className="appointment-options">
              <div className="video-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="phone-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="video-icon">
                <FontAwesomeIcon icon={faVideo} />
              </div>
            </div>
          </div>
        </div>
        <hr id="hori-2"></hr>

        <div className="appointment-details">
      
           
           <a onClick={()=>handleGame(index)}>Details</a>
          <a >Feedback</a>
        </div>
      </div>
      ))
    ):(
      <p>No appointments available</p>
    )}  
    </div>
  );
}

export default Appointmentcard;
