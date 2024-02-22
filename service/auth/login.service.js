import endpoints from '../../constants/endpoints.js'
import api from '../../utility/API.js'
import cs from '../../utility/ChromeStorage.js'

export default async function ({ email, password }) {
  return new Promise((resolve, reject) => {
    api
      .post(endpoints.auth.login, { email, password })
      .then((res) => {
        console.log(res)
        cs.setToken(res.token)
        cs.setUser(res.user)
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
