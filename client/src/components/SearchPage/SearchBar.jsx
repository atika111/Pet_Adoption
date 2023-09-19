import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function SearchBar({ onSearch }) {
  const [searchType, setSearchType] = useState("basic");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchType, searchQuery);
  };

  return (
    <div className="aa">
      <FormControl>
        <InputLabel sx={{margin: "15px"}}>Search Type</InputLabel>
        <Select
          value={searchType}
          sx={{margin: "5px"}}
          onChange={handleSearchTypeChange}
        >
          <MenuItem value="basic">Basic Search</MenuItem>
          <MenuItem value="advanced">Advanced Search</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Search Query"
        value={searchQuery}
        sx={{width: "100%"}}
        onChange={handleSearchQueryChange}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
}

export default SearchBar;
