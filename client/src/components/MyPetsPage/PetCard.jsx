import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { usePetData } from "../../context/PetDataContext";
import { useNavigate } from "react-router-dom";

function PetCard({ petId }) {
  const {pets} = usePetData();

  const pet = pets.find((pet) => pet.id === petId);

  if (!pet) {
    return null;
  }

  const navigate = useNavigate()

  const handlePetCard = () => {
    navigate("/petPage")
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={pet.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pet.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pet.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handlePetCard}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PetCard;
