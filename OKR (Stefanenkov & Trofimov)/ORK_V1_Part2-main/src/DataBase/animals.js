const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllAnimals = () => {
  return DB.animals;
};

module.exports = {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  patchAnimalAge,
  deleteAnimal,
};
