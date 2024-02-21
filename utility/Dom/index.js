class Dom {
  constructor(document) {
    this.document = document
  }
  displayMessage(text, type) {
    var messageElement = this.document.getElementById('message')
    messageElement.textContent = text

    if (type === 'success') {
      messageElement.classList.add('success')
    } else {
      messageElement.classList.remove('success')
    }
    messageElement.style.display = 'block'
  }

  setLoader(loaderValue) {
    var loader = this.document.getElementById('loader')
    loader.style.display = loaderValue ? 'block' : 'none'
  }

  showContainerById(id) {
    const container = this.document.getElementById(id)
    return function (containerValue) {
      container.style.display = containerValue ? 'block' : 'none'
    }
  }
}
export default Dom
