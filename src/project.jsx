import React from "react";

function Projects()
{
    return(
        <div className="container mt-5">
            <h1 className="col Info"> Projects </h1>
            <hr style={{color:"white", height:"2px"}}></hr>
            <div className="row projects">
                <div className="col-md-4 clone">
                    <img src="https://www.shutterstock.com/image-photo/woman-entrepreneur-using-calculator-pen-260nw-710912206.jpg" alt="calculator" />
                    <div className="text-center">
                    <h5>Calculator Clone</h5>
                    <p>Developed a calculator clone utilizing Python programming language, implementing basic arithmetic operations (addition, subtraction, multiplication, division) with a user-friendly command-line interface.</p>
                    <p><b>Tech Stacks</b>" : HTML | CSS | JavaScript" </p>
                    </div>
                </div>
                <div className="col-md-4 clone">
                    <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/21/full/1650564951-343.jpg" alt="tribute" />
                    <div className="text-center">
                    <h5>Tribute Page</h5>
                    <p>This tribute page celebrates the iconic career of Mahendra Singh Dhoni, affectionately known as 'Captain Cool'. Dhoni's journey from a small-town boy to becoming one of India's greatest cricketing legends is nothing short of inspirational. As a dynamic wicketkeeper-batsman and astute captain, Dhoni's contributions to Indian cricket are immeasurable.</p>
                    <p><b>Tech Stacks</b>" : HTML | CSS " </p>
                    </div>
                </div>
                <div className="col-md-4 clone">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupCaMqV7keDeEUILMB9wrUUzAY2qTI6DpMQ&usqp=CAU" alt="todo" />
                    <div className="text-center">
                    <h5>Todos List</h5>
                    <p>Developed a calculator clone utilizing Python programming language, implementing basic arithmetic operations (addition, subtraction, multiplication, division) with a user-friendly command-line interface.</p>
                    <p><b>Tech Stacks</b>" : HTML | CSS | JavaScript" </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Projects;