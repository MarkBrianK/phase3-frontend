import React, {useEffect, useState}from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import "../App.css"

function VehiclePage(){
    const [vehicles, setVehicle] = useState([])
    useEffect(()=> {
        fetch("https://backendapi3.herokuapp.com/vehicles")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setVehicle(data)

        })
    }, [])
    return(
        <div>
            {vehicles.map((vehicle)=>{
          return(<div>
        <Card className="card" style={{ width: '80rem' }}>
          <Card.Body>
            <Card.Title>{vehicle.model}</Card.Title>
            <Card.Text>{vehicle.manufacture_year}</Card.Text>
            <Card.Text>{vehicle.last_service}</Card.Text>
            <Card.Text>{vehicle.next_service}</Card.Text>
            <Card.Text>{vehicle.catlytic_converter}</Card.Text>
            <Card.Text>{vehicle.vehicle_insurance}</Card.Text>
            <Card.Text>{vehicle.driver_id}</Card.Text>
            <Card.Text>{vehicle.garage_id}</Card.Text>
            <Card.Text>{vehicle.vehicle_registration}</Card.Text>
          </Card.Body>
        </Card>
          </div>

          )
        })}


        </div>
    )
}
export default VehiclePage
