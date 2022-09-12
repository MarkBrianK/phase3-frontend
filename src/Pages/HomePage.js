import React from "react";
import "../App.css"
import image from "../Images/pexels-pixabay-104836.jpg"
import health from "../Images/car health.jpg"

function HomePage(){
    return(
        < div className="homepage">
                <div className="header-1">
                <h1 className="about-board"> About us</h1>
                    <p>Did you know keeping up with and overhauling your vehicle consistently could assist with checking an Earth-wide temperature boost and save a great deal of lives? Indeed, Presently you know. One-fifth of the all out fossil fuel byproducts and mishaps because of mechanical disappointment can be diminished by normal vehicle check-ups. This web application is intended to follow and give information on how we are keeping up with our vehicles in order to adapt to ozone harming substances discharge which lead to an Earth-wide temperature boost. It is additionally mean to uphold the customary serving of vehicles in order to bring down number of mishaps that are brought about by mechanical disappointments. The information acquired can be utilized by specialists and regulation masters to guarantee that drivers deal with their vehicles and environment.</p>

                </div>
                <div className="speed">
                    <img src={image} alt=""/>
                </div>
                <div >

                </div>
                <div>

                </div>
                <div className="health">
                <img src={health} alt=""/>
                </div>
                <div>


                </div>


            </div>
    )
}
export default HomePage
