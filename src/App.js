
   



import './App.css';

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";


import RequestConnect from "./pages/RequestConnect";
import PeoplePage from './pages/PeoplePage';

import { useEffect, useState } from "react";

 

export default function App() {

const [users, setUsers] = useState([]);

useEffect(() => {

  async function fetchData() {

    try {

      

      const res = await fetch("https://randomuser.me/api/?results=20");

      const users = await res.json();

      

      setUsers(users.results); 

    } catch (e) {

      

      console.log("An error occurred", e);

    } finally {

  

      console.log("This is finished");

    }

  }

  fetchData();

}, []);

 

  return (

      <div className="App">
        

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/people" element={<PeoplePage users={users} />} />

          <Route path="/request" element={<RequestConnect/>} />

        </Routes>

      </div>

    );

  }