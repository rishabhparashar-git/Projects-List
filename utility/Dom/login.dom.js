import { loginService } from '../../service/index.js'
import Dom from './index.js'

export default class LoginDom {
  constructor(document) {
    this.document = document
    this.dom = new Dom(this.document)
  }

  async #login(onSuccess = null) {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    this.dom.setLoader(true)
    try {
      const response = await loginService({ email, password })
      this.dom.displayMessage(response.message, 'success')
      this.dom.showContainerById('login-container')(false)
      onSuccess && (await onSuccess(response))
    } catch (err) {
      console.error(err)
      this.dom.displayMessage(err?.message, 'error')
    } finally {
      this.dom.setLoader(false)
    }
  }
  showLoginScreen(success) {
    const loginBtn = document.getElementById('login-btn')
    loginBtn.onclick = () => this.#login(success)
    this.dom.showContainerById('login-container')(true)
  }
}
