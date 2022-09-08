import React, {useState, useEffect}from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
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
        {garages.map((garage)=>{
          return(<div>
        <Card className="card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{garage.name}</Card.Title>
            <Card.Text>{garage.location}</Card.Text>
            <Card.Text>{garage.mechanic}</Card.Text>
            <Card.Text>{garage.certification_number}</Card.Text>
          </Card.Body>
          <Button onClick={() => {
                  deleteGarage(garage.id) }}>Delete</Button>
        </Card>
          </div>

          )
        })}

        </div>
    )
}
export default GaragePage
