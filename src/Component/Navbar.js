import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css"
export default function () {

    //greeting text---------------------
    const date = new Date();
    const hours = date.getHours();
    var greet = "";

    if (hours > 4 && hours < 12) {
        greet = "Good Morning"
    }
    else if (hours >= 12 && hours < 16) {
        greet = "Good Afternoon"
    } else if (hours >= 16 && hours < 20) {
        greet = "Good evening"
    } else if (hours >= 20 && hours < 22) {
        greet = "Good Night"
    }
    else {
        greet = "Go to Sleep"
    }
    //-------------------------------------------

    return (
        <>
            <div className="container-fluid bg-light text-dark">
                <div className="row py-2 align-items-center">
                    <div className="head col-6">
                        <img className="img d-block shadow-sm ms-2" src="images/face.jpg" />
                        <h2 className="head ms-3 fw-bold">Shibil.S.Mathew</h2>
                        <h5 className="end-text"></h5>
                    </div>
                    <div className="col-6 show row">
                    <span className="nav col-4 text-decoration-none"><a href="#section1">Projects</a></span>
                    <span className="nav col-4 text-decoration-none"><a href="#section2">Achievements</a></span>
                    <span className="nav col-4 text-decoration-none"><a href="#section3">Certificates</a></span>
                    </div>
                    </div>
            </div>
            <span className="ms-3 text-muted">{greet}</span>
        </>
    )
}