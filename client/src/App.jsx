import { useState } from "react";
import LoggedOutHomePage from "./components/HomePage/LoggedOutHomePage";
import LoggedInHomePage from "./components/HomePage/LoggedInHomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import "../node_modules/antd/dist/reset.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useAuth } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import MyPetsPage from "./components/MyPetsPage/MyPetsPage";
import PrivateRoute from "./components/Auth/privateRoute";
import ProfileSettingForm from "./components/ProfileSettings/ProfileSettingsForm";
import PetPage from "./components/PetPage/PetPage";
import Dashboard from "./components/Admin/Dashboard";
import { useUser } from "./context/UserContext";
import AddPetForm from "./components/Admin/AddPetForm";

function App() {
  const { isLogin } = useAuth();

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={!isLogin ? <LoggedOutHomePage /> : <LoggedInHomePage />}
        ></Route>
        <Route path="search" element={<SearchPage />} />
        <Route
          path="MyPets"
          element={
            <PrivateRoute>
              <MyPetsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <ProfileSettingForm />
            </PrivateRoute>
          }
        />
        <Route 
        path="petPage"
        element={<PetPage />}
        />

        <Route 
        path="dashboard"
        element={<Dashboard />}
        />
        <Route 
        path="addPet"
        element={<AddPetForm />}
        />

      </Routes>
    </div>
  );
}

export default App;
