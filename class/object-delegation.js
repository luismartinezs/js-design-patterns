// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md

// Not "class" based, but does what class intends to do without meddling with constructors and prototypes, and without using ES6 class syntax
// Links properties of two objects, where one delegates to the other

var foo = {
  something: function () {
    console.log('Tell me something good...')
  }
}

var bar = Object.create(foo)

bar.something() // Tell me something good...

// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch6.md

// Another example

var Task = {
  setID: function (ID) {
    this.id = ID
  },
  outputID: function () {
    console.log(this.id)
  }
}

// make `XYZ` delegate to `Task`
var XYZ = Object.create(Task)

XYZ.prepareTask = function (ID, Label) {
  this.setID(ID)
  this.label = Label
}

XYZ.outputTaskDetails = function () {
  this.outputID()
  console.log(this.label)
}

// ABC = Object.create( Task );
// ABC ... = ...

// Example of "inheritance"
// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch6.md

var Foo = {
  init: function (who) {
    this.me = who
  },
  identify: function () {
    return 'I am ' + this.me
  }
}

var Bar = Object.create(Foo)

Bar.speak = function () {
  alert('Hello, ' + this.identify() + '.')
}

var b1 = Object.create(Bar)
b1.init('b1')
var b2 = Object.create(Bar)
b2.init('b2')

b1.speak()
b2.speak()
