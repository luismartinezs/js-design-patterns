//  https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md

// Basic ES6 class and instantiation
class CoolGuy {
  specialTrick = nothing

  CoolGuy (trick) {
    specialTrick = trick
  }

  showOff () {
    output("Here's my trick: ", specialTrick)
  }
}

Joe = new CoolGuy('jumping rope')

Joe.showOff() // Here's my trick: jumping rope
