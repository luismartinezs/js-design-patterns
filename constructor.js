// Each of the following options will create a new empty object:

var newObject = {}

// or
var newObject = Object.create(Object.prototype)

// or
var newObject = new Object()

// To access the properties of a function, you need to initialize the object

function Car (model, year, miles) {
  this.model = model
  this.year = year
  this.miles = miles

  this.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles'
  }
}

// Usage:

// We can create new instances of the car. The keyword 'new' makes 'this' be equal to the variable name
var civic = new Car('Honda Civic', 2009, 20000)
var mondeo = new Car('Ford Mondeo', 2010, 5000)
