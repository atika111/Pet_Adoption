import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useUser } from "./UserContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isClickedLogin, setIsClickedLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const { setUserData, userData } = useUser();

  const logout = () => {
    console.log("Logged out!");
    setUserData(null);
    localStorage.removeItem("token");
    setIsLogin(false); // Set isLogin to false when logging out
  };

  const fetchUserData = async () => {
    if (!token) {
      console.error("No token available for fetching user data.");
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:8080/users/user/full`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    if (isLogin) {
      fetchUserData();
    }
  }, [isLogin, token]);

  useEffect(() => {
    if(token) {
      setIsLogin(true)
      
    }
  },[])

  return (
    <AuthContext.Provider
      value={{
        isClickedLogin,
        setIsClickedLogin,
        modalOpen,
        setModalOpen,
        isLogin,
        setIsLogin,
        logout,
        setToken,
        token,
        fetchUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
