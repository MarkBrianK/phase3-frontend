import React from "react";
import "../App.css"
import ig from "../Images/ig.jpg"
import linkedin from "../Images/linkedin.jpg"
import facebook from "../Images/fb.png"
import git from "../Images/github.jpg"

function Footer(){
    return(
        <div className="footer">
            <div className="media">
                <div className="medea"><img src={git} alt=""/></div>
                <div className="medea"> <img src={ig} alt=""/></div>
                <div className="medea"> <img src={facebook} alt=""/></div>
                <div className="medea"><img src={linkedin} alt=""/></div>
            </div>
            <div><span className="hearts">&hearts;</span>  Ride and Mind   <span className="hearts">&hearts;</span></div>
        </div>
    )
}

export default Footer
