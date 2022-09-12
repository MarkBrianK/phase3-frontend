import React, {useState, useEffect}from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from "@mui/material";
import "../App.css"

function GaragePage(){
    const [garages, setGarage] = useState([])
    useEffect(()=> {
        fetch("https://backendapi3.herokuapp.com/garages")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setGarage(data)

        })
    }, [])
    const tableStyle = {
      width: "80%",
      margin: "20px 10%"
    }

  function deleteGarage(id){
    fetch(`https://backendapi3.herokuapp.com/garages/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const deleting = garages.filter((garage) => garage.id !== id)
            setGarage(deleting)
        })
  }
    return(
        <div>
        {/* {garages.map((garage)=>{
          return(<div className="card">
        <Card>
          <Card.Body>
            <Card.Title>Name:   {garage.name}</Card.Title>
            <Card.Text>Location:    {garage.location}</Card.Text>
            <Card.Text>Lead Mechanic:   {garage.mechanic}</Card.Text>
            <Card.Text> Garage certification number:    {garage.certification_number}</Card.Text>
          </Card.Body>
          <Button onClick={() => {
                  deleteGarage(garage.id) }}>Delete</Button>
        </Card>
          </div>

          )
        })} */}
          <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>Name </TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Lead Mechanic</TableCell>
          <TableCell>Garage Certification Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {garages.map((garage) => (
          <TableRow >
            <TableCell>{garage.name}</TableCell>
            <TableCell>{garage.location}</TableCell>
            <TableCell>{garage.mechanic}</TableCell>
            <TableCell>{garage.certification_number}</TableCell>
            <TableCell>
              <Button
                style={{ margin: "0px 20px" }}
                onClick={() => {
                  deleteGarage(garage.id)
                }
                }
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

        </div>
    )
}
export default GaragePage
