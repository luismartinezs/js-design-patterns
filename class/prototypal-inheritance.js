// https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md

function Foo (name) {
  this.name = name
}

Foo.prototype.myName = function () {
  return this.name
}

function Bar (name, label) {
  Foo.call(this, name)
  this.label = label
}

// here, we make a new `Bar.prototype`
// linked to `Foo.prototype`
Bar.prototype = Object.create(Foo.prototype)

// Beware! Now `Bar.prototype.constructor` is gone,
// and might need to be manually "fixed" if you're
// in the habit of relying on such properties!

Bar.prototype.myLabel = function () {
  return this.label
}

var a = new Bar('a', 'obj a')

a.myName() // "a"
a.myLabel() // "obj a"
