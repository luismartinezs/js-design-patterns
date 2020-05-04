// creation of objects without the need for a constructor
// use factory pattern when the object component set up has a high level of complexity and when we want to create different instances of objects easily depending on the environment we are in

// Dealer A

DealerA = {}

DealerA.title = function title () {
  return 'Dealer A'
}

DealerA.pay = function pay (amount) {
  console.log(
    `set up configuration using username: ${this.username} and password: ${this.password}`
  )
  return `Payment for service ${amount} is successful using ${this.title()}`
}

//Dealer B

DealerB = {}
DealerB.title = function title () {
  return 'Dealer B'
}

DealerB.pay = function pay (amount) {
  console.log(
    `set up configuration using username: ${this.username}
and password: ${this.password}`
  )
  return `Payment for service ${amount} is successful using ${this.title()}`
}

//@param {*} DealerOption
//@param {*} config

function DealerFactory (DealerOption, config = {}) {
  const dealer = Object.create(DealerOption)
  Object.assign(dealer, config)
  return dealer
}

const dealerFactory = DealerFactory(DealerA, {
  username: 'user',
  password: 'pass'
})
console.log(dealerFactory.title())
console.log(dealerFactory.pay(12))

const dealerFactory2 = DealerFactory(DealerB, {
  username: 'user2',
  password: 'pass2'
})
console.log(dealerFactory2.title())
console.log(dealerFactory2.pay(50))
