import React from "react";
import Profile from "./Profile";
import Sidebar from "./sSidebar";
import ReviewComponent from "../Review-components";
function Review(){
    return(
<div className="review-page">
<Profile/>
<Sidebar />
<ReviewComponent />
</div>
    );
}
export default Review