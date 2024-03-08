import React , { useState } from "react";
import { Link } from "react-router-dom";
import TimeButtons from "./buttons";
import ConfirmNotification from "./DialogBox";
function PetDetails() {
  const [clickstate,setClickState]=useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    owner: "",
    issues: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const id = Math.floor(Math.random() * 1000).toString(); 

    fetch("http://localhost:4000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        name: formData.name,
        age: parseInt(formData.age),
        gender: formData.gender,
        owner: formData.owner,
        reason: "Regular checkup",
        time:"10:00",
        issues: formData.issues
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add appointment");
        }
        return response.json();
      })
      .then((data) => {
        setClickState(true);
      })
      .catch((error) => console.error("Error adding appointment:", error));
  };

  return (
    <div className="consultation">
      <Link to="/dashboard" className="backto">Back to Appointments</Link>
      <h3>New Appointment</h3>
      <div className="pat-vet">
      <div className="vetern">
        <p className="vetern-det">Veterinarian Details</p>

        <p className="vetern-sel">Select Veterinarian</p>
        <select>
          <option>Dr.John Doe</option>
          <option>Dr.John Doe</option>
          <option>Dr.John Doe</option>
          <option>Dr.John Doe</option>
        </select>
        <TimeButtons />
      </div>
      <div className="patient">
        <p className="patient-det">Patient Details</p>
        <br></br>
        <div className="pat-info">
          <div className="pat-info-1">
            <div>
            <label htmlFor="name">Pet Name</label><br></br>
            <input type="text" name="name"  value={formData.name}
                  onChange={handleChange}></input>
            <hr></hr>
            </div>
            <br></br>
           <div>
           <label htmlFor="name">Pet Age</label><br></br>
            <input type="text"  name="age"
                  value={formData.age}
                  onChange={handleChange}></input>
            <hr></hr>
           </div>
           <br></br>
           <div>
           <label htmlFor="name">Pet Owner</label><br></br>
            <input type="text" name="owner"
                  value={formData.owner}
                  onChange={handleChange}></input>
            <hr></hr>
           </div>
          </div>
          <br></br>
          <div className="pat-info-2">
            <div>
            <label htmlFor="gender">Gender</label>
            <br></br>
            
            <select name="gender"
                  value={formData.gender}
                  onChange={handleChange}>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            </div>
            <br></br>
            <p className="other-det">Other Details</p>
            <br></br>
            <div>
            <label htmlFor="name">Pet Issues</label>
            <br></br>
            <input type="text"  name="issues"
                  value={formData.issues}
                  onChange={handleChange}></input>
            <hr></hr>
            </div>
            <br></br>
           <div>
           <label htmlFor="name">Reason for visit</label><br></br>
            <textarea name="textbox" rows={4} cols={60}></textarea>
            
           </div>
          <br></br>
          </div>
        </div>
      </div>
      </div>
      <div className="newappoint-buttons">
        <button>Cancel</button>
        <button onClick={()=>setClickState(true)}>Book Appointment</button>
      </div>
      {clickstate && <ConfirmNotification isOpen={clickstate} onClose={() => setClickState(false)} cancelButtonDialog="cancel-dialog" confirmButtonDialog="confirm-dialog" handleSubmit={handleSubmit} />}
    </div>
  );
}
export default PetDetails;
