import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
// Icons
import PetsIcon from "@mui/icons-material/Pets";

import LoginSignupButton from "../Auth/LoginSignupButton";
import LoginSignupModal from "../Auth/LoginSignupModal";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import { Dashboard } from "@mui/icons-material";
import AddPetForm from "../Admin/AddPetForm";
import { PlusCircleOutlined } from "@ant-design/icons";

function Navbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { userData, setUserData } = useUser();
  const { logout, isLogin, setIsLogin } = useAuth();

  const navigate = useNavigate();
  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOutMenu = async (e) => {
    setUserData(null);
    setIsLogin(false);
    setAnchorElUser(null);
    logout();
  };

  const handleProfileMenu = () => {
    setAnchorElUser(null);
    navigate("/profile");
  };

  const handleSearchMenu = () => {
    setMenuAnchorEl(null);
    navigate("/search");
  };

  const handleHomeMenu = () => {
    setMenuAnchorEl(null);
    navigate("/");
  };

  const handleMyPetsMenu = () => {
    setMenuAnchorEl(null);
    navigate("/MyPets");
  };

  const handleDashboardMenu = () => {
    navigate("/dashboard");
  };

  const handleAddPetMenu = () => {
    navigate("addPet");
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#6504B5" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleHomeMenu}
          >
            <MenuItem onClick={handleHomeMenu}>
              <HomeIcon sx={{ marginRight: 1 }} />
              Home
            </MenuItem>
            <MenuItem onClick={handleSearchMenu}>
              <SearchIcon sx={{ marginRight: 1 }} />
              Search
            </MenuItem>
            {isLogin && (
              <MenuItem onClick={handleMyPetsMenu}>
                <PetsIcon sx={{ marginRight: 1 }} />
                My Pets Page
              </MenuItem>
            )}
            {userData?.isAdmin && (
              <>
                <MenuItem onClick={handleDashboardMenu}>
                  <Dashboard sx={{ marginRight: 1 }} />
                  Dashboard
                </MenuItem>

                <MenuItem onClick={handleAddPetMenu}>
                  <PlusCircleOutlined sx={{ marginRight: 1}} />
                  Add Pet
                </MenuItem>
              </>
            )}
          </Menu>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          {isLogin ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                {/* {userData.firstName} {userData.lastName} */}
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      // src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleProfileMenu}>
                    <Typography textAlign="center"> Profile </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogOutMenu}>
                    <Typography textAlign="center"> Logout </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <LoginSignupButton />
              <LoginSignupModal />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
