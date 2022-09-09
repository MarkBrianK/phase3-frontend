import React, {useEffect, useState}from "react";
import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button'
import "../App.css"

function DriverPage(){
    const [drivers, setDriver] = useState([])
    useEffect(()=> {
        fetch("https://backendapi3.herokuapp.com/drivers")
        .then((res)=>  res.json())
        .then((data)=>{
            console.log(data)
            setDriver(data)

        })
    }, [])

    return(
        <div>
            {drivers.map((driver)=>{
          return(<div>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> Name:    {driver.name}</Card.Title>
            <Card.Text>Licence Number:    {driver.licence_number}</Card.Text>
          </Card.Body>
        </Card>
          </div>

          )
        })}


        </div>
    )
}
export default DriverPage
