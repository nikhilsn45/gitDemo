import React from "react";
import Navbar from "./navbar";


function Header() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col text-center" style={{marginTop:"100px"}}>
                        <img className="image" src={require("./mansi.jpg")} alt="myImage" />
                    </div>
                    <div className="col d-flex align-items-center Info"  style={{marginTop:"100px"}}>
                        <div className="align-center">
                            <h2>Hello!</h2>
                            <h1 className="name">I'm Mansi Nakod</h1>
                            <p>Enthusiastic and dedicated full-stack developer eager to kickstart a career in web development. Proficient in front-end technologies such as HTML, CSS, and JavaScript, with hands-on experience in building responsive and visually appealing user interfaces.</p>
                            <a href="https://drive.google.com/file/d/1OpyR1Sbd1BzIAV0x_NSxWR8c6nOCuU4P/view?usp=sharing"><button className="button">Resume </button></a>
                            <a href="mailto:mansinakod10@gmail.com"><button className="button">Hire me </button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;