import endpoints from '../../constants/endpoints.js'
import api from '../../utility/API.js'
import ls from '../../utility/LocalStorage.js'

export default async function ({ email, password }) {
  return new Promise((resolve, reject) => {
    api
      .post(endpoints.auth.login, { email, password })
      .then((res) => {
        console.log(res)
        ls.setToken(res.token)
        ls.setRefreshToken(res.refreshToken)
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
