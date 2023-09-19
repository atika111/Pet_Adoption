import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function PetList({ pets }) {
  return (
    <List>
      {pets.map((pet) => (
        <ListItem key={pet.id}>
          <ListItemText primary={pet.name} secondary={pet.type} />
          {/* Add other pet details */}
        </ListItem>
      ))}
    </List>
  );
}

export default PetList;
