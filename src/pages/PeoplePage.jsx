// 




// import React from "react";
// import Navbar from "../component/Navbar";

// const About = () => {
//     return (
//         <div>
//             <Navbar/>
//             <h3>
//                 PeopleConnect
//             </h3>
//             <p>
                
//             </p>
//         </div>
//     );
// }

// export default About


import React from "react";
import Navbar from "../component/Navbar";
import PersonCard from "../component/Personcard";


 

const PeoplePage = ({ users}) => {

  return (

    <main className="people">
      <Navbar />

      <div className="grid-container">
        {
          users.map((user, index) => {
            return (
            <PersonCard key={index} age={user.registered.age} name={user.name.first} email={user.email} image={user.picture.medium} />
          );
          })
        }
      </div>

    </main>

  );

};

 

export default PeoplePage;