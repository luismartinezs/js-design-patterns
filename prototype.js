/**
 * The prototype pattern is based on prototypical inheritance whereby objects created to act as prototypes for other objects
 */

var myCar = {
  name: 'Ford Escort',
  brake () {
    console.log('Stop! I am applying brakes')
  },
  Panic () {
    console.log('wait. how do you stop this thing?')
  }
}
// use object create to instantiate a new car
var yourCar = Object.create(myCar)
//You can now see that one is a prototype of the other
console.log(yourCar.name)
