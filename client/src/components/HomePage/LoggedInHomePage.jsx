import {useState} from "react";
import Navbar from "../Header/Navbar";
import WelcomeHeader from "../Header/WelcomeHeader";
import { useAuth } from "../../context/AuthContext";


function LoggedInHomePage() {
  const {getUserById} = useAuth()
  // useEffect(() => {
  //   getUserById()
  // }, [])
  
  return (
    <div>
      <Navbar />
      <WelcomeHeader />
    </div>
  );
}

export default LoggedInHomePage;
