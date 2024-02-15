import { loginService } from './service'
import Dom from './utility/dom'

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
