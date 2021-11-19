import React, { useEffect, useState } from 'react'
import './Card.css'

function Card() {

    const [myaprtment, setApartment] = useState(null);

useEffect(()=>{
    //do something on load
    console.log("hey I've loaded up");

    if(!myaprtment){

        fetch('http://localhost:8080/apartments')
        .then((response) => response.json())
        .then((apartment) =>{
            console.log('apartment list :', apartment)
            setApartment(apartment);
        });
    }
    }, [myaprtment]);



   

 
    return (
        <div className = "card">
            {myaprtment ? myaprtment.map((myaprtment) =>{
                return(
                    <div>

                     <h2>{myaprtment.location}</h2>
                      <h4>{myaprtment.description}</h4>
                      <h3>{myaprtment.price}</h3> 
                    </div>
                );
            })
            : "is loading"
         }  
            
        </div>
    );
}

export default Card
