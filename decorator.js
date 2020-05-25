// https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/

// same memoize function from before
const memoize = fn => {
  let cache = {}
  return (...args) => {
    let n = args[0]
    if (n in cache) {
      console.log('Fetching from cache', n)
      return cache[n]
    } else {
      console.log('Calculating result', n)
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}

const calculateFactorial = x => {
    if (x === 0) {
      return 1
    } else {
      return x * factorial(x - 1)
    }
  }

const factorial = memoize(calculateFactorial)

console.log(factorial(5)) // calculated
console.log(factorial(6)) // calculated for 6 and cached for 5
