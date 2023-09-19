import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import Navbar from "../Header/Navbar";
import PetCard from "./PetCard";
import { usePetData } from "../../context/PetDataContext";


function MyPetsPage() {
  const {pets} = usePetData();

  return (
    <div>
      <Navbar />
      <Container className="my-pets-container">
        <Typography variant="h4">My Pets Page</Typography>
        {/* Toggle Button */}
        <Button className="My-pets-toggle-button" variant="outlined">
          Toggle between Pets and Saved Pets
        </Button>
        {/* Pet Cards */}
        <Grid container spacing={2} className="my-pets-card-container">
          {pets.length === 0 ? (
            <Typography variant="body1">
              You currently do not own or foster any pets.
            </Typography>
          ) : (
            pets.map((pet) => (
                <Grid item key={pet.id} xs={12} sm={6} md={4} lg={3}>
                  <PetCard petId={pet.id} />
                </Grid>
              ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default MyPetsPage;
