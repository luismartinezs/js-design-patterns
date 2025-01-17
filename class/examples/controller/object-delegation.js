var LoginController = {
  errors: [],
  getUser: function () {
    return document.getElementById('login_username').value
  },
  getPassword: function () {
    return document.getElementById('login_password').value
  },
  validateEntry: function (user, pw) {
    user = user || this.getUser()
    pw = pw || this.getPassword()

    if (!(user && pw)) {
      return this.failure('Please enter a username & password!')
    } else if (pw.length < 5) {
      return this.failure('Password must be 5+ characters!')
    }

    // got here? validated!
    return true
  },
  showDialog: function (title, msg) {
    // display success message to user in dialog
  },
  failure: function (err) {
    this.errors.push(err)
    this.showDialog('Error', 'Login invalid: ' + err)
  }
}

// Link `AuthController` to delegate to `LoginController`
var AuthController = Object.create(LoginController)

AuthController.errors = []
AuthController.checkAuth = function () {
  var user = this.getUser()
  var pw = this.getPassword()

  if (this.validateEntry(user, pw)) {
    this.server('/check-auth', {
      user: user,
      pw: pw
    })
      .then(this.accepted.bind(this))
      .fail(this.rejected.bind(this))
  }
}
AuthController.server = function (url, data) {
  return $.ajax({
    url: url,
    data: data
  })
}
AuthController.accepted = function () {
  this.showDialog('Success', 'Authenticated!')
}
AuthController.rejected = function (err) {
  this.failure('Auth Failed: ' + err)
}

// Since AuthController is just an object (so is LoginController), we don't need to instantiate (like new AuthController()) to perform our task. All we need to do is

AuthController.checkAuth()

// if you do need to create one or more additional objects in the delegation chain, that's easy, and still doesn't require anything like class instantiation

var controller1 = Object.create(AuthController)
var controller2 = Object.create(AuthController)
