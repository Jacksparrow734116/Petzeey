import {
  faEnvelope,
  faHome,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState,useEffect } from "react";
import { Link,useParams} from "react-router-dom";
import owner from "./Images/owner.jpg";
import ConfirmNotification from "./components/DialogBox";


function ReviewComponent() {
   const [clickstate,setClickState]=useState(false);
   const [appointmentData, setAppointmentData] = useState({});
    const {id}=useParams();
   const handleSubmit=()=>{
    setClickState(true);
   }
   useEffect(() => {

    fetch(`http://localhost:4000/appointments/${id}`)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {setAppointmentData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching appointment:", error));
  }, [id]);
  if (appointmentData == null && appointmentData == undefined) {
    console.log(appointmentData);
  }
  return (
    <div className="review-comps">
        <div>
        <Link to="/dashboard" className="backtoappoint">Back to Appointments</Link>
        </div>
      <div className="review-pet-det">
        <div className="review-pet">
          <p className="review-pet-id">#ID-{appointmentData.id}</p>
          <div className="review-time">
            <p>25th March,2022</p>
            <p>{appointmentData.time} Pm</p>
          </div>
          <br></br>
          <div className="review-pet-issues">
            <p>Pet Issues:</p>
            <p>{appointmentData.issues}</p>
          </div>
          <br></br>
          <div className="reason-for-visit">
            <p>Reason for Reason :</p>
            <p>{appointmentData.reason}</p>
          </div>
          <br></br>
          <div className="review-confirm">
            <p>Confirmed by DR.John Doe</p>
          </div>
        </div>
        <div className="review-options">
          <FontAwesomeIcon icon={faPhone} className="icons"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faVideo} className="icons"></FontAwesomeIcon>
          <button className="cancel-but">Cancel</button>
          <button className="edit-but">Edit</button>
          <button className="closeAppoint" onClick={handleSubmit}>Close Appointment</button>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="review-patient-doc--det">
        <div className="review-pat-own-det">
          <div className="review-pat-det">
            <div className="review-pat-name">
              <img src="https://s3-alpha-sig.figma.com/img/a65b/75d1/a46c4eb0625bb9c85003c2a756391a58?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJwEGwp4ebQBfgGdjNZo-kGDn6sePadQLtYqVNeh3c3DuAZ9vkZTkwazhjppBNiXd26m99q-YKPpxoo0nh3h3Jf3W954EUVQA3nppZnZ01in4eWqvSrFTjtrUTOd22KChfihiP26UH2smcBgEThcJS-zUuVYBQ1oywHsHh97IsDYPmpsf6Mgz2FLPcqqCt-ILj-SCzc6hsoRXpoWV8bBmTcY~0NlRbpISgaZXhh1KF1sVUsA3xIOddnTN~fq3-iQy~B6Q8Uq1g5JrY59oZna5iUBtEfAdD1L06trpn1kz1FrsSAQZiCBX39iHy3x5oSgfwOLaesIlkC3-O-rw3a22Q__"></img>
              <div className="review-pat-name-det">
                <p>Patient</p>
                <p>{appointmentData.name}</p>
                <p>Dog,Breed</p>
              </div>
            </div>
            <div className="review-pat-gender">
              <div className="review-pat-gen">
                <p>Gender :</p>
                <p>{appointmentData.gender}</p>
              </div>
              <div className="review-pat-age">
                <p>Age :</p>
                <p>{appointmentData.age} Years</p>
              </div>
            </div>
          </div>
          <div className="review-own-det">
            <div className="review-own-name">
              <img src={owner}></img>
              <div className="review-own-name-det">
                <p>Pet Owner</p>
                <p>{appointmentData.owner}</p>
              </div>
            </div>
            <div className="review-own-mail">
              <div className="review-own-mailid">
                <FontAwesomeIcon icon={faEnvelope} className="review-icons"></FontAwesomeIcon>
                <p>johndoe@gmail.com</p>
              </div>
              <div className="review-own-mailid">
                <FontAwesomeIcon icon={faPhone} className="review-icons"></FontAwesomeIcon>
                <p>9390276788</p>
              </div>
              <div className="review-own-mailid">
                <FontAwesomeIcon icon={faHome}className="review-icons"></FontAwesomeIcon>
                <p>FG Colony Panjagutta USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="review-doc-det">
          <div className="review-doc-info">
            <img src={owner}></img>
            <div className="review-doc-name-det">
              <p>Doctor</p>
              <p>Dr.John Doe</p>
            </div>
          </div>
          <div className="review-doc-contact-details">
            <div className="review-doc-hos-det">
              <p>NPI No:{' '}{' '}65984567</p>
              <p>Clinic :{' '}{' '}St.John's clinic,ultah,US</p>
            </div>
            <div className="review-doc-per-contact">
              <div className="review-icons-2">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p>johndoe@gmail.com</p>
              </div>
              <div  className="review-icons-2">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <p>9876567899</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {clickstate && <ConfirmNotification isOpen={clickstate} onClose={() => setClickState(false)} cancelButtonDialog="cancel-dialog" confirmButtonDialog="confirm-dialog" />}
    </div>
  );
}
export default ReviewComponent;
