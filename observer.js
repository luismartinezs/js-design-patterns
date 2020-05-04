// handy in a place where objects communicate with other sets of objects simultaneously

function Observer () {
  this.observerContainer = []
}

Observer.prototype.subscribe = function (element) {
  this.observerContainer.push(element)
}

// the following removes an element from the container

Observer.prototype.unsubscribe = function (element) {
  const elementIndex = this.observerContainer.indexOf(element)
  if (elementIndex > -1) {
    this.observerContainer.splice(elementIndex, 1)
  }
}

/**
 * we notify elements added to the container by calling
 * each subscribed components added to our container
 */
Observer.prototype.notifyAll = function (element) {
  this.observerContainer.forEach(function (observerElement) {
    observerElement(element)
  })
}

const eventA = (log) => console.log(log)
const eventB = (log) => console.log(log)

const observer = new Observer()
observer.subscribe(eventA)
observer.subscribe(eventB)
observer.notifyAll('Hello')
observer.unsubscribe(eventA)
observer.unsubscribe(eventB)
observer.notifyAll('Bye')