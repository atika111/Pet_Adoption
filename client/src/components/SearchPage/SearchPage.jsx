import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import axios from "axios";
import Navbar from "../Header/Navbar";

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchType, searchQuery) => {
    axios.get(`/search?searchType=${searchType}&query=${searchQuery}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="search-page-container">
      <h1>Search Page</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="search-results">
        {searchResults.map((pet) => (
          <SearchResult key={pet.id} pet={pet} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default SearchPage;
