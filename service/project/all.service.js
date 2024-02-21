import endpoints from '../../constants/endpoints.js'
import api from '../../utility/API.js'

export default async function () {
  return new Promise((resolve, reject) => {
    console.log('fetch proj service')
    api
      .get(endpoints.projects.all)
      .then((res) => {
        const projs = res.data.map((ob) => ({ id: ob._id, name: ob.name }))
        console.log(projs)
        resolve(projs)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
