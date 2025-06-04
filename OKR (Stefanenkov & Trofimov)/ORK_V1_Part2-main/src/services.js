const Animals = require("./DataBase/animals");
const { v4: uuid } = require("uuid");

const getAllAnimals = () => Animals.getAllAnimals();
const getOneAnimal = (id) => Animals.getAnimalById(id);

module.exports = {
  getAllAnimals,
  getOneAnimal,
  createNewAnimal,
  updateAnimal,
  patchAnimalAge,
  deleteAnimal
};
