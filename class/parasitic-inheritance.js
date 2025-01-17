//  https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md

// "Traditional JS Class" `Vehicle`
function Vehicle () {
  this.engines = 1
}
Vehicle.prototype.ignition = function () {
  console.log('Turning on my engine.')
}
Vehicle.prototype.drive = function () {
  this.ignition()
  console.log('Steering and moving forward!')
}

// "Parasitic Class" `Car`
function Car () {
  // first, `car` is a `Vehicle`
  var car = new Vehicle()

  // now, let's modify our `car` to specialize it
  car.wheels = 4

  // save a privileged reference to `Vehicle::drive()`
  var vehDrive = car.drive

  // override `Vehicle::drive()`
  car.drive = function () {
    vehDrive.call(this)
    console.log('Rolling on all ' + this.wheels + ' wheels!')
  }

  return car
}

var myCar = new Car()

myCar.drive()
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!

// Alternative https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch6.md

function Foo (who) {
  this.me = who
}
Foo.prototype.identify = function () {
  return 'I am ' + this.me
}

function Bar (who) {
  Foo.call(this, who)
}
Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.speak = function () {
  alert('Hello, ' + this.identify() + '.')
}

var b1 = new Bar('b1')
var b2 = new Bar('b2')

b1.speak()
b2.speak()
