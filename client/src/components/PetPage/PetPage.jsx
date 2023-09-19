import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { usePetData } from '../../context/PetDataContext';

const PetPage = () => {
  const { pet, isFostering, toggleFoster, isSaved, toggleSave } = usePetData();
  const petDetails = pet;

  const handleAdoptClick = () => {
    // Handle adoption logic
  };

  const handleSaveClick = () => {
    toggleSave();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {petDetails.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type: {petDetails.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adoption Status: {petDetails.adoptionStatus}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Height: {petDetails.height}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weight: {petDetails.weight}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Color: {petDetails.color}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hypoallergenic: {petDetails.hypoallergenic ? 'Yes' : 'No'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dietary Restrictions: {petDetails.dietaryRestrictions}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {petDetails.breed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bio: {petDetails.bio}
        </Typography>
      </CardContent>
      <CardActions>
        {isFostering ? (
          <Button variant="contained" color="secondary" onClick={toggleFoster}>
            Return to Adoption Center
          </Button>
        ) : (
          <>
            {isSaved ? (
              <Button variant="contained" color="default" onClick={handleSaveClick}>
                Unsave
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleSaveClick}>
                Save for Later
              </Button>
            )}
            <Button variant="contained" color="primary" onClick={handleAdoptClick}>
              Adopt
            </Button>
            <Button variant="contained" color="secondary" onClick={toggleFoster}>
              Foster
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default PetPage;
