// This one was created by me from scratch

const ApiInterface = function (implementation) {
  // required methods
  const methods = ['get', 'post', 'delete']
  const errorMsg =
    'ApiInterface: Provide an api implementation object as argument, that exposes the methods: ' +
    methods.join(', ')

  if (!implementation) {
    throw new Error(errorMsg)
  }

  try {
    return methods.reduce((acc, method) => {
      if (typeof implementation[method] === 'undefined') {
        throw new Error(errorMsg)
      }
      acc[method] = implementation[method]
      return acc
    }, {})
  } catch (err) {
    console.error(err)
  }
}

const magic = (function makeMagic () {
  const name = 'magic'
  function get () {
    console.log(name + ' GET')
  }
  function post () {
    console.log(name + ' POST')
  }
  function del () {
    console.log(name + ' DELETE')
  }

  return {
    get,
    post,
    delete: del
  }
})()

const auth = (function makeAuth () {
  const name = 'auth'
  function get () {
    console.log(name + ' GET')
  }
  function post () {
    console.log(name + ' POST')
  }
  function del () {
    console.log(name + ' DELETE')
  }
  return {
    get,
    post,
    delete: del
  }
})()

const magicApi = ApiInterface(magic) // Will throw error if magic does not have get, post and delete methods

magicApi.get()
magicApi.post()
magicApi.delete()

const authApi = ApiInterface(auth)

authApi.get()
authApi.post()
authApi.delete()
