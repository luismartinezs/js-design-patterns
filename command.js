// encapsulates method invocation, operations, or requests into a single object so that we can pass method calls at our discretion

;(function () {
  var carManager = {
    //information requested
    requestInfo (model, id) {
      return 'The information for ' + model + ' with ID ' + id + ' is foo bar'
    },

    // now purchase the car
    buyVehicle (model, id) {
      return 'You have successfully purchased Item ' + id + ', a ' + model
    },

    // now arrange a viewing
    arrangeViewing (model, id) {
      return (
        'You have successfully booked a viewing of ' +
        model +
        ' ( ' +
        id +
        ' ) '
      )
    }
  }
})()
