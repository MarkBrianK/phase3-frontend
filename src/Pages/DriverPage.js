import React, {useEffect, useState}from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
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
    function deleteDriver(id){
        fetch(`https://backendapi3.herokuapp.com/drivers/${id}`,{
            method: "DELETE",
        })
        .then(r => r.json())
        .then(() => {
            const deleting = drivers.filter((driver) => driver.id !== id)
                setDriver(deleting)
            })
      }
    return(
        <div>
            {drivers.map((driver)=>{
          return(<div>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{driver.name}</Card.Title>
            <Card.Text>{driver.licence_number}</Card.Text>
          </Card.Body>
          <Button onClick={() => {
                  deleteDriver(driver.id) }}>Delete</Button>
        </Card>
          </div>

          )
        })}


        </div>
    )
}
export default DriverPage
