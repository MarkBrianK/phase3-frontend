import React, {useEffect, useState}from "react";
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button'
import { Table, TableCell, TableRow, TableHead, TableBody} from "@mui/material";
import "../App.css"

function DriverPage(){
    const [drivers, setDriver] = useState([])
    const [driverSearch, setDriverSearch] = useState([])
    useEffect(()=> {
        fetch("https://backendapi3.herokuapp.com/drivers")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setDriver(data)
            setDriverSearch(data)

        })
    }, [])
    const tableStyle = {
      width: "80%",
      margin: "20px 10%"
    }
    function searchHandle(value) {
      const searchedDrivers = driverSearch.filter(
        (owner) =>
         owner.name.toLowerCase().includes(value.toLowerCase())
      );
      setDriver(searchedDrivers);
    }

    const Search = (
      <div className="container3">
      <input
        onChange={(event) => searchHandle(event.target.value)}
        type="text"
        placeholder="Search Driver"
      />
      <button type="submit" className="btnsearch ">
        <i className="icon-search"></i>Search
      </button>
      </div>
    )

    return(
        <div>
           {Search}
            {/* {drivers.map((driver)=>{
          return(<div className="card">
        <Card>
          <Card.Body>
            <Card.Title> Name:    {driver.name}</Card.Title>
            <Card.Text>Licence Number:    {driver.licence_number}</Card.Text>
          </Card.Body>
        </Card>
          </div>

          )
        })} */}
          <Table style={tableStyle}>
      <TableHead>
        <TableRow style={{ fontSize: "18px" }}>
          <TableCell>Name</TableCell>
          <TableCell>Licence Number</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {drivers.map((driver) => (
          <TableRow>
            <TableCell>{driver.name}</TableCell>
            <TableCell>{driver.licence_number}</TableCell>
            <TableCell>

            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>


        </div>
    )
}
export default DriverPage
