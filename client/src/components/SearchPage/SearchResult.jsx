import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function SearchResult({ pet }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{pet.name}</Typography>
        <Typography>{pet.type}</Typography>
      </CardContent>
    </Card>
  );
}

export default SearchResult;
