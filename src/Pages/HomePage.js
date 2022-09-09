import React from "react";
import "../App.css"
import image from "../Images/pexels-pixabay-104836.jpg"
import emoji from "../Images/emoji think.jpg"
import health from "../Images/car health.jpg"
function HomePage(){
    return(
        < div className="homepage">
                <div>
                    <h2>Did you know keeping up with and overhauling your vehicle consistently could assist with checking an Earth-wide temperature boost and save a great deal of lives?<br></br> <img className="emoji" src={emoji} alt = ""/> <br></br>Indeed, Presently you know. One-fifth of the all out fossil fuel byproducts and mishaps because of mechanical disappointment can be diminished by normal vehicle check-ups.</h2>

                </div>
                <div className="speed">
                    <img src={image} alt=""/>
                </div>
                <div >
                <h1> About us</h1>

                </div>
                <div>
                    
                </div>
                <div className="health">
                <img src={health} alt=""/>
                </div>
                <div>
                <h1>Contact us</h1>
                </div>


            </div>
    )
}
export default HomePage
