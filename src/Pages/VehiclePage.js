import React, {useEffect, useState}from "react";
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button'
import { Table, TableCell, TableRow, TableHead, TableBody } from "@mui/material";
import "../App.css"


function VehiclePage(){
    const [vehicles, setVehicle] = useState([])
    const [vehicleSearch, setVehicleSearch] = useState([])
    useEffect(()=> {
        fetch("https://backendapi3.herokuapp.com/vehicles")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setVehicle(data)
            setVehicleSearch(data)

        })
    }, [])
     const tableStyle = {
      width: "80%",
      margin: "20px 10%"
    }
    function searchHandle(value) {
      const searchedVehicles = vehicleSearch.filter(
        (vec) =>
         vec.vehicle_registration.toLowerCase().includes(value.toLowerCase())
      );
      setVehicle(searchedVehicles);
    }

    const Search = (
      <div className="container3">
      <input
        onChange={(event) => searchHandle(event.target.value)}
        type="text"
        placeholder="Search vehicle"
      />
      <button type="submit" className="btnsearch ">
        <i className="icon-search"></i>Search
      </button>
      </div>
    )
    return(
        <div>
          {Search}
            {/* {vehicles.map((vehicle)=>{
          return(<div className="card">
        <Card className="card">
          <Card.Body>
            <Card.Title> Model:   {vehicle.model}</Card.Title>
            <Card.Text> Year of Manufacture:   {vehicle.manufacture_year}</Card.Text>
            <Card.Text> Last service:  {vehicle.last_service}</Card.Text>
            <Card.Text>Next sevice:     {vehicle.next_service}</Card.Text>
            <Card.Text>Catalytic converter:     {vehicle.catlytic_converter}</Card.Text>
            <Card.Text> Vehicle insurance:    {vehicle.vehicle_insurance}</Card.Text>
            <Card.Text>Owner:  {vehicle.driver_id}</Card.Text>
            <Card.Text>Garage serviced:   {vehicle.garage_id}</Card.Text>
            <Card.Text>Vehicle Registration:   {vehicle.vehicle_registration}</Card.Text>
          </Card.Body>
        </Card>
          </div>

          )
        })} */}
             <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>Name</TableCell>
          <TableCell>Year of Manufacture</TableCell>
          <TableCell>Last Service</TableCell>
          <TableCell>Next Service</TableCell>
          <TableCell>Catalytic Conveter</TableCell>
          <TableCell>Vehicle Insurance</TableCell>
          <TableCell>Owner</TableCell>
          <TableCell>Garage Serviced</TableCell>
          <TableCell>Vehicle Registration</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {vehicles.map((vehicle) => (
          <TableRow>
            <TableCell>{vehicle.model}</TableCell>
            <TableCell>{vehicle.manufacture_year}</TableCell>
            <TableCell>{vehicle.last_service}</TableCell>
            <TableCell>{vehicle.next_service}</TableCell>
            <TableCell>{vehicle.catlytic_converter}</TableCell>
            <TableCell>{vehicle.vehicle_insurance}</TableCell>
            <TableCell>{vehicle.driver_id}</TableCell>
            <TableCell>{vehicle.garage_id}</TableCell>
            <TableCell>{vehicle.vehicle_registration}</TableCell>
            <TableCell>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>



        </div>
    )
}
export default VehiclePage
