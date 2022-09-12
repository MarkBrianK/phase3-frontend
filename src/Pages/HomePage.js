import React from "react";
import "../App.css"
import image from "../Images/pexels-pixabay-104836.jpg"
import emoji from "../Images/emoji think.jpg"
import health from "../Images/car health.jpg"
import ig from "../Images/ig.jpg"
import linkedin from "../Images/linkedin.jpg"
import facebook from "../Images/fb.png"
import git from "../Images/github.jpg"
function HomePage(){
    return(
        < div className="homepage">
                <div className="header-1">
                    <p>Did you know keeping up with and overhauling your vehicle consistently could assist with checking an Earth-wide temperature boost and save a great deal of lives?<br></br> <img className="emoji" src={emoji} alt = ""/> <br></br>Indeed, Presently you know. One-fifth of the all out fossil fuel byproducts and mishaps because of mechanical disappointment can be diminished by normal vehicle check-ups.</p>

                </div>
                <div className="speed">
                    <img src={image} alt=""/>
                </div>
                <div >
                <h1 className="about-board"> About us</h1>

            <p> This web application is intended to follow and give information on how we are keeping up with our vehicles in order to adapt to ozone harming substances discharge which lead to an Earth-wide temperature boost. It is additionally mean to uphold the customary serving of vehicles in order to bring down number of mishaps that are brought about by mechanical disappointments. The information acquired can be utilized by specialists and regulation masters to guarantee that drivers deal with their vehicles and environment. </p><br></br><br></br>




                </div>
                <div>
                <p className="read">The name Ride and Mind comes from the demonstration of valuing vehicles as a significant method for transport and yet Minding the climate and the mischief that these vehicles can cause to us, people. It is intended to mindfulness that as we move around with our vehicles we likewise need to deal with our current circumstance for a superior presence as individuals.</p>

                </div>
                <div className="health">
                <img src={health} alt=""/>
                </div>
                <div>
                <h1>Contact us</h1>



                <h2 className="contact">Reach out and contact us on</h2>
            <div className="media">
                <div className="medea"><img src={git} alt=""/>  MarkBrianK</div>
                <div className="medea"> <img src={ig} alt=""/>  @mark_brian</div>
                <div className="medea"> <img src={facebook} alt=""/>  MarkBrian Kranja</div>
                <div className="medea"><img src={linkedin} alt=""/> MarkBrian Kariuki</div>






            </div>


                </div>


            </div>
    )
}
export default HomePage
