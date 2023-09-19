import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { PetDataProvider } from "./context/PetDataContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <AuthProvider>
      <PetDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PetDataProvider>
    </AuthProvider>
  </UserProvider>
);
