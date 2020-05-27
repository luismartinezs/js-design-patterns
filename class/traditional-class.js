//  https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch4.md

function Foo (name) {
  this.name = name
}

Foo.prototype.myName = function () {
  return this.name
}

var a = new Foo('a')
var b = new Foo('b')

a.myName() // "a"
b.myName() // "b"
