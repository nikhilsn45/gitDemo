import React from "react";

function About() {
    return (
        <div className="container mt-5">
            <h1 className="col Info" >About Me</h1>
            <hr style={{ color: "white", height: "2px" }} />
            <div className="row" style={{ marginTop: "50px" }}>
                <div className="col Info">
                    <p>Dedicated and efficient full stack web developer with excellent problem solving skills and ability to learn quickly and perform well in a team. Strongly interested in obtaining appropriate position to work in enhancing product and real work experience.</p> 
                    <p>Learning Full stack web development from online courses. <span style={{ color: "orange", fontWeight: "bold" }}>The technologies I've knowledge : Html, Css, JavaScript, React.js, Node.js, Embeded.js, PostgreSQL, Bootstrap,</span> Styled-Components Currently Learning MERN </p>
                </div>
                <div className="col text-center">
                    <img className="allImages" src={require("./4884511-removebg-preview.png")} alt="myImage" />
                </div>
            </div>
        </div>
    )
}
export default About;