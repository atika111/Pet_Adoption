import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import PetList from "./PetList";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);

  // useEffect(() => {
  //   axios.get("/user").then((response) => {
  //     setUsers(response.data);
  //   }).catch((error) => {
  //     console.error("Error fetching users:", error);
  //   });

  //   axios.get("/pet").then((response) => {
  //     setPets(response.data);
  //   }).catch((error) => {
  //     console.error("Error fetching pets:", error);
  //   });
  // }, []);

  return (
    <div>
      <h1>User List</h1>
      <UserList users={users} />

      <h1>Pet List</h1>
      <PetList pets={pets} />
    </div>
  );
}

export default Dashboard;
