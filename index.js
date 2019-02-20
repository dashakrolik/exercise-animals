class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }

  calculateIncome() {
    const cropValue = this.crops.map(crop => crop.getYieldInEuros()) //map over crop instances
    const animalValue = this.animals.map(animal => animal.getValueInEuros()) //map over animal instances
    const totalYield = cropValue.concat(animalValue) //an array was returned in previous step, hence we join two arrays of these numbers
    return totalYield.reduce((a, b) => a + b, 0) //we need to get one number so we reduce the array to a number

  }

  addAnimal(animal) {
    this.animals.push(animal)
  }
}

module.exports.Farm = Farm