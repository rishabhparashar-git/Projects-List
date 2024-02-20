import ls from './LocalStorage.js'

class Api {
  #getHeaders() {
    let headers = {
      'Content-Type': 'application/json',
    }
    headers.Authorization = `Bearer ${ls.getToken()}`
    return headers
  }
  constructor(ServerUrl) {
    this.ServerUrl = ServerUrl
  }

  async get(endpoint, headers = {}) {
    const url = this.ServerUrl + endpoint
    const response = await fetch(url, {
      headers: { ...this.#getHeaders(), headers },
    })
    const data = await response.json()
    return new Promise(async (resolve, reject) => {
      if (response.ok) {
        resolve(data)
      } else {
        reject(data)
      }
    })
  }

  async post(endpoint, body, headers) {
    const url = this.ServerUrl + endpoint
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { ...this.#getHeaders(), headers },
    })
    const data = await response.json()
    return new Promise(async (resolve, reject) => {
      if (response.ok) {
        resolve(data)
      } else {
        reject(data)
      }
    })
  }
}

const SERVER_URL = 'https://api.plutoteams.com/api'

const api = new Api(SERVER_URL)
export default api
