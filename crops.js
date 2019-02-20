class Crop {
    constructor(acres) {
        this.acres = acres
    }

    getYieldInEuros() {
        const yieldKg = this.getYieldInKg()
        return yieldKg * this.price
    }
}

class Wheat extends Crop {
    constructor(acres) {
        super(acres)
        this.price = 1.5
    }
  
    getYieldInKg() {
      return Math.pow(this.acres * 1.5, 1.3)
    }
  }

  class Sugarcane extends Crop {
      constructor(acres) {
          super(acres)
          this.price = 2
        }

      getYieldInKg() {
          return Math.pow(this.acres * 2.6, 1.1)
      }
  }




module.exports = { Wheat, Crop, Sugarcane }