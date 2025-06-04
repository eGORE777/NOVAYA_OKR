const AnimalsService = require("./services");

const getAllAnimals = (req, res) => {
  const animals = AnimalsService.getAllAnimals();
  res.send({ status: "OK", data: animals });
};


module.exports = {
  getAllAnimals,
  getOneAnimal,
  createNewAnimal,
  updateAnimal,
  patchAnimalAge,
  deleteAnimal,
};
