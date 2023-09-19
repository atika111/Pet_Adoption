import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid"; // Import Grid from Material-UI
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../Header/Navbar";

function AddPetForm() {
  const [petDetails, setPetDetails] = useState({
    type: "",
    name: "",
    adoptionStatus: "",
    picture: "",
    height: "",
    weight: "",
    color: "",
    bio: "",
    hypoallergenic: false,
    dietaryRestrictions: "",
    breed: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPetDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddPet = async () => {
    try {
      const {data} = await axios.post("http://localhost:8080/pet",petDetails) 
      console.log('data: ', data);
    } catch (error) {
      console.log('error: ', error);
      
    }
  };

  return (
    <>
      <Navbar />
      <Container >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ width: 'fitContent',}}
            image="/static/images/cards/contemplative-reptile.jpg"
          />
          <CardContent >
            <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center'}}>
              <Grid item xs={4}>
                <TextField
                  id="type"
                  name="type"
                  label="Type"
                  variant="standard"
                  fullWidth
                  value={petDetails.type}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="standard"
                  fullWidth
                  value={petDetails.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="height"
                  name="height"
                  label="Height"
                  variant="standard"
                  fullWidth
                  value={petDetails.height}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="weight"
                  name="weight"
                  label="Weight"
                  variant="standard"
                  fullWidth
                  value={petDetails.weight}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="breed"
                  name="breed"
                  label="Breed"
                  variant="standard"
                  fullWidth
                  value={petDetails.breed}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="adoptionStatus"
                  name="adoptionStatus"
                  label="Adoption Status"
                  variant="standard"
                  fullWidth
                  value={petDetails.adoptionStatus}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  label="Dietary Restrictions"
                  variant="standard"
                  fullWidth
                  value={petDetails.dietaryRestrictions}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="hypoallergenic"
                name="hypoallergenic"
                label="Hypoallergenic"
                variant="standard"
                fullWidth
                value={petDetails.hypoallergenic}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="bio"
                name="bio"
                label="Bio"
                variant="standard"
                fullWidth
                value={petDetails.bio}
                onChange={handleInputChange}
              />
            </Grid>
          </CardContent>
          <CardActions sx={{display:'flex', justifyContent: 'center'}}>
            <Button onClick={handleAddPet}>Add Pet</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default AddPetForm;
