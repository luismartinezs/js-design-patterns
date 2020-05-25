// Mixins add properties and methods to other objects

const flyMixin = {
  launch: () => console.log('Launching'),
  goUp: () => console.log('Ascending'),
  goDown: () => console.log('Descending'),
  land: () => console.log('Landed')
}

const vehicle = (function () {
  function startEngine () {
    console.log('Engine started')
  }

  function turnRight () {
    console.log('Turned right')
  }

  function turnLeft () {
    console.log('Turned left')
  }

  return {
    startEngine,
    turnLeft,
    turnRight
  }
})()

const plane = Object.assign(vehicle, flyMixin)

plane.startEngine()
plane.goUp()