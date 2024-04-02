import React from "react";
import LeftSection from "./leftcontact";
import RightSection from "./rightcontact";
function Contacts()
{
    return(
        <div className="container mt-5">
            <h1 className="Info">Contact Me</h1>
            <div className="row mt-5">
                <div className="row col-md-4">
                    <LeftSection/>
                </div>
                <div className="row col-md-8">
                    <RightSection/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;