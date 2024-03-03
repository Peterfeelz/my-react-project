import React from "react";
import { Link } from "react-router-dom";

const PersonCard = ({ age, name, email, image}) =>{
  return(
    <main className ="cardStyle">
       <img src={image} alt='detail'></img>
      <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      </div>

      <Link to= '/request' className = 'btn'>Connect Now!</Link>
    </main>
  );
};

export default PersonCard;