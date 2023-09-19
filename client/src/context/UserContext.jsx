// UserProfileContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
