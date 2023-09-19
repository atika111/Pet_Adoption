import React from "react";
import { Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";

const WelcomeHeader = () => {
  const {userData} = useUser();
  const {isLogin} = useAuth() 
  
  const textStyle = css`
    font-weight: bold;
  `;

  return (
    <div>
      {isLogin ? (
        <Typography variant="h3" css={textStyle} mt={2}>
          Welcome {userData?.firstName}!
        </Typography>
      ) : (
        <>
          <Typography variant="h3" css={textStyle} mt={2}>
            Welcome to our Pet Adoption Platform
          </Typography>

          <Typography variant="h6" css={textStyle} m={2}>
            Adopting a pet is a wonderful way to bring joy and companionship
            into your life. Our platform connects pet lovers with furry friends
            in need of forever homes. Browse through a variety of pets and find
            your perfect match today!
          </Typography>
        </>
      )}
    </div>
  );
};

export default WelcomeHeader;
