const { Farm } = require('./index')
const { Wheat, Sugarcane } = require('./crops')
const { Cow, Horse, Pig } = require('./animals')

//Final test
test('Add crops, animals, calculate total value', () => {
    const farm = new Farm('Farm_name')
    farm.addAnimal(new Cow(100))
    farm.addAnimal(new Horse(200))
    farm.addAnimal(new Pig(300))
    farm.addCrop(new Wheat(100))
    farm.addCrop(new Sugarcane(200))
    expect(farm.calculateIncome()).not.toBe(0)
    console.log('Farm: ', farm.name)
    console.log('N of crops:  ', farm.crops.length)
    console.log('N of animals:  ', farm.animals.length)
    console.log('Total income: ', farm.calculateIncome())
  })