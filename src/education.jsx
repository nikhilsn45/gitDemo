import React from "react";
import edu from "./arr"
function Education()
{
    return(
        <div className="container mt-5">
            <h1 style={{color:"white"}}>Education</h1>
            <hr style={{color:"white", height:"2px"}}></hr>
            <div className="row">
            {edu.map((items) => 
            <div className="col Education-section">
                <h4 style={{color:"orange"}} >{items.college}</h4>
                <h6>{items.years}</h6>
                <p>{items.course}</p>
                <p>{items.specialization}</p>
            </div>)}
            </div>

        </div>
    )
}

export default Education;