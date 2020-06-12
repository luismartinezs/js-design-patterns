const ApiInterface = function (implementation) {
  // required methods
  const methods = ['get', 'post', 'delete']

  if (!implementation) {
    throw new Error(
      'ApiInterface: Provide an api implementation object as argument, that exposes the methods: ' +
        methods.join(', ')
    )
  }

  let api
  let notFoundMethods = []
  try {
    api = methods.reduce((acc, method) => {
      if (typeof implementation[method] === 'undefined') {
        notFoundMethods.push(method)
        return acc
      }
      acc[method] = implementation[method]
      return acc
    }, {})
    if (notFoundMethods.length) {
      throw new Error(
        `Api interface requires implementation of method(s) ${notFoundMethods.join(
          ', '
        )}`
      )
    }
  } catch (err) {
    console.error(err)
  }
  return api
}

const magic = (function makeMagic () {
  const name = 'magic'
  function get () {
    console.log(name)
  }
  function post () {
    console.log('POST')
  }
  function del () {
    console.log('DELETE')
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
