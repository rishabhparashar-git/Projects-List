class LocalStorage {
  #secureGet(key) {
    try {
      let data = localStorage.getItem(key)
      data = JSON.parse(data)
      return data
    } catch (err) {
      console.error(err)
      return null
    }
  }

  getToken() {
    return localStorage.getItem('token') || ''
  }

  setToken(token) {
    localStorage.setItem('token', token)
  }

  getRefreshToken() {
    return localStorage.setItem('refresh-token', rToken) || ''
  }

  setRefreshToken(rToken) {
    localStorage.setItem('refresh-token', rToken)
  }
}

const ls = new LocalStorage()
export default ls
