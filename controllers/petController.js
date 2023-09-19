const Pet = require('../models/petModel')

const createPet = (newPet) => {
  return Pet.create({
    type: newPet.type,
  name: newPet.name,
  adoptionStatus: newPet.adoptionStatus,
  picture: newPet.picture,
  height: newPet.height,
  weight: newPet.weight,
  color: newPet.color,
  bio: newPet.bio,
  hypoallergenic: newPet.hypoallergenic,
  dietaryRestrictions: newPet.dietaryRestrictions,
  breed: newPet.breed,
  });
};
const addPet = async (req, res) => {
  try {
    const createdPet = await createPet(req.body);
    res.send(createdPet);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = {addPet}
