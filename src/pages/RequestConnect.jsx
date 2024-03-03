









import React from 'react';

import Navbar from '../component/Navbar';

import {useState} from 'react';

 

const RequestConnect = () => {

  const[userData,setUserData] = useState

    ({

    name: "",

    email: "",

    age: "",

    number: 0,

    interest: "",

  })

 

  const [showCard, setShowCard] = useState(false)

 

  const handleChange = (e) => {

    const name = e.target.name;

    const value = e.target.value;

 

    console.log(name, value);

    setUserData({

      ...userData,

      [name]: value

    });

  }

 

  const handleFormSubmit = (e) => {

    e.preventDefault();

    setShowCard(true);

  }

 

  return (

    <div className= 'request-form'>

      <Navbar />

      <h3>Request Connect Form</h3>

      <div className= 'forms'>

        <form onSubmit={(e)=>{handleFormSubmit(e)}} action = "#">

         

        <label htmlFor="name">Name: </label>

        <input onChange={(e)=>{handleChange(e)}} name="name" type= "text" placeholder= "Input your name" id= "name" /><br/><br/>

 

        <label htmlFor="email">Email: </label>

        <input onChange={(e)=>{handleChange(e)}} name="email" type= "email" placeholder= "Input your email" id= "email" /><br/><br/>

 

          <label htmlFor="age">Age: </label>

          <input onChange={(e)=>{handleChange(e)}} name="age" type= "number" placeholder= "Input your age" id= "age" /><br/><br/>

 

          <label htmlFor="number">Number: </label>

          <input onChange={(e)=>{handleChange(e)}} name="number" type= "text" placeholder= "Input your phone number" id= "number" /><br/><br/>

 

          <label htmlFor="interest">Interest: </label>

          <input onChange={(e)=>{handleChange(e)}} name="interest" type= "text" placeholder= "What are your interests" id= "interest" /><br/><br/>

 

          <button type="submit">Submit</button>

        </form>

      </div>

 

        {showCard && <div className="userData">

          <h2>Thanks you for sending in your request</h2>

          <p>Here is your data below</p>

          <div className= 'request-data'>

            <p>Name; {userData.name}</p>

            <p>Email; {userData.email}</p>

            <p>Age; {userData.age}</p>

            <p>Number; {userData.number}</p>

            <p>Interest; {userData.interest}</p>

          </div>

      </div>}

    </div>

    );

  }

 

    export default RequestConnect;













// import React from 'react';

// import Navbar from '../components/Navbar';

// import {useState} from 'react';

 

// const RequestConnect = () => {

//   const[userData,setUserData] = useState

//     ({

//     name: "",

//     email: "",

//     age: "",

//     number: 0,

//     interest: "",

//   })

 

//   const [showCard, setShowCard] = useState(false)

 

//   const handleChange = (e) => {

//     const name = e.target.name;

//     const value = e.target.value;

 

//     console.log(name, value);

//     setUserData({

//       ...userData,

//       [name]: value

//     });

//   }

 

//   const handleFormSubmit = (e) => {

//     e.preventDefault();

//     setShowCard(true);

//   }

 

//   return (

//     <div className= 'request-form'>

//       <Navbar />

//       <h3>Request Connect Form</h3>

//       <div className= 'forms'>

//         <form onSubmit={(e)=>{handleFormSubmit(e)}} action = "#">

         

//         <label htmlFor="name">Name: </label>

//         <input onChange={(e)=>{handleChange(e)}} name="name" type= "text" placeholder= "Input your name" id= "name" /><br/><br/>

 

//         <label htmlFor="email">Email: </label>

//         <input onChange={(e)=>{handleChange(e)}} name="email" type= "email" placeholder= "Input your email" id= "email" /><br/><br/>

 

//           <label htmlFor="age">Age: </label>

//           <input onChange={(e)=>{handleChange(e)}} name="age" type= "number" placeholder= "Input your age" id= "age" /><br/><br/>

 

//           <label htmlFor="number">Number: </label>

//           <input onChange={(e)=>{handleChange(e)}} name="number" type= "text" placeholder= "Input your phone number" id= "number" /><br/><br/>

 

//           <label htmlFor="interest">Interest: </label>

//           <input onChange={(e)=>{handleChange(e)}} name="interest" type= "text" placeholder= "What are your interests" id= "interest" /><br/><br/>

 

//           <button type="submit">Submit</button>

//         </form>

//       </div>

 

//         {showCard && <div className="userData">

//           <h2>Thanks you for sending in your request</h2>

//           <p>Here is your data below</p>

//           <div className= 'request-data'>

//             <p>Name; {userData.name}</p>

//             <p>Email; {userData.email}</p>

//             <p>Age; {userData.age}</p>

//             <p>Number; {userData.number}</p>

//             <p>Interest; {userData.interest}</p>

//           </div>

//       </div>}

//     </div>

//     );

//   }

 

//     export default RequestConnect;