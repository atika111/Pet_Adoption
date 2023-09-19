import { useState } from "react";
// import Box from "@mui/material/Box";
import WelcomeHeader from "../Header/WelcomeHeader";
import Navbar from "../Header/Navbar";
import myDogImg from "../../images/DogAndCat.png";
import { Image } from "@mui/icons-material";

const LoggedOutHomePage = () => {
  return (
    <div>
      <Navbar />
      <WelcomeHeader />
      <div className="my-dog-img-container">
        <img className="my-dog-img" src={myDogImg} />
      </div>
    </div>
  );
};

export default LoggedOutHomePage;
