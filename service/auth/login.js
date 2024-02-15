import endpoints from '../../constants/endpoints'
import api from '../../utility/API'
import ls from '../../utility/LocalStorage'

export default async function ({ email, password }) {
  return api
    .post(endpoints.auth.login, { email, password })
    .then((res) => {
      ls.setToken(res.token)
      ls.setRefreshToken(res.refreshToken)
      return res
    })
    .promise()
}
