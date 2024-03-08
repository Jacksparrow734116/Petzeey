import React from "react";
import Sidebar from "./sSidebar"; 
import Profile from "./Profile";
import PetDetails from "./PetDetails";
function NewAppointment(){
    return(
<div className="newAppointment">
    <Profile />
    <Sidebar />
    <PetDetails />
</div>
    );
}
export default NewAppointment;