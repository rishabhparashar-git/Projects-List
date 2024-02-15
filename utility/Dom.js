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
}
export default Dom
