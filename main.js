import { loginService } from './service.js'
import Dom from './utility/Dom.js'

const dom = new Dom(document)

var email = document.getElementById('email').value
var password = document.getElementById('password').value

const loginBtn = document.getElementById('loginBtn')

loginBtn.onclick = function () {
  loginService({ email, password })
    .then((res) => {
      dom.displayMessage('Logged In Successfully', 'success')
    })
    .catch((err) => {
      dom.displayMessage(err?.message, 'error')
    })
}
