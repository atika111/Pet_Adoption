import { createContext, useContext, useState} from "react";

const PetDataContext = createContext();

function PetDataProvider({ children }) {
  const [pet, setPet] = useState({});
  const [isFostering, setIsFostering] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleFoster = () => {
    setIsFostering(!isFostering);
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };
  const pets = [
    {
      id: 1,
      name: "Buddy",
      status: "Fostered",
      imageUrl: "pet1.jpg",
    },
    {
      id: 2,
      name: "Luna",
      status: "Adopted",
      imageUrl: "pet2.jpg",
    },
  ];

  return (
    <PetDataContext.Provider
      value={{
        pets,
        pet,
        setPet,
        isFostering,
        toggleFoster,
        isSaved,
        toggleSave,
      }}
    >
      {children}
    </PetDataContext.Provider>
  );
}

const usePetData = () => {
  return useContext(PetDataContext);
};

export { usePetData, PetDataProvider };
