import React from "react";

function Navbar()
{
    return(
    <div className="Navbar-div">
        <ul className="Navbar">
            <li><a class="active" href="./header.jsx">Home</a></li>
            <li><a href="./about.jsx">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="./contacts.jsx">Contact</a></li>
        </ul>
    </div>
    );
}

export default Navbar;