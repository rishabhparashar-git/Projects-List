import cs from './ChromeStorage.js'

class Api {
  async #getHeaders() {
    let headers = {
      'Content-Type': 'application/json',
    }

    const token = await cs.getTokenAsync()
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    return headers
  }
  constructor(ServerUrl) {
    this.ServerUrl = ServerUrl
  }

  async get(endpoint, headers = {}) {
    const url = this.ServerUrl + endpoint
    const defaultHeaders = await this.#getHeaders()
    const response = await fetch(url, {
      headers: { ...defaultHeaders, headers },
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
    const defaultHeaders = await this.#getHeaders()
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { ...defaultHeaders, headers },
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
