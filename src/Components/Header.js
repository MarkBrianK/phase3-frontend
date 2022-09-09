import React from "react";
import {NavLink} from 'react-router-dom'
import "../App.css"
function Header(){
    return(
        <div className="Header">
            <div className="nav-section">
                <NavLink to = '/' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}> Home</NavLink>
                <NavLink to = '/drivers' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Owner</NavLink>
                <NavLink to = '/garages' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Garage</NavLink>
                <NavLink to = '/vehicles' exact="true" style={{textDecoration : "none", color :"white", fontSize:20}}>Vehicle</NavLink>
            </div>
        </div>
    )
}
export  default Header
