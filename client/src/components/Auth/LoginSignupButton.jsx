import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "@mui/material";
import { useUser } from "../../context/UserContext";

function LoginSignupButton() {
  const { setIsClickedLogin, setModalOpen, isLogin} = useAuth();

  const openLoginModal = () => {
    setIsClickedLogin(true);
    setModalOpen(true);
  };
  const openSignupModal = () => {
    setIsClickedLogin(false);
    setModalOpen(true);
  };

  return (
    <div className="LoginSignupButton">
      {!isLogin ? (
        <>
          <Button color="inherit" onClick={openLoginModal}>
            Sign Up
          </Button>
          <Button color="inherit" onClick={openSignupModal}>
            Log In
          </Button>
        </>
      ) : (
        <>{" "}</>
      )}
    </div>
  );
}

export default LoginSignupButton;
