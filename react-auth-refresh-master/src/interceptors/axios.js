import axios from 'axios'

axios.defaults.baseURL = 'https://sandbox.thebagqueenmm.com'

let refresh = false

axios.interceptors.request.use(
  async function (config) {
    const tempUser = localStorage.getItem('testingAuthData')
    const user = tempUser && JSON.parse(tempUser)

    // const response = await axios.post(
    //   'token',
    //   { token: user['refreshToken'] },
    //   { withCredentials: true }
    // )

    // if (response.status === 200) {
    //   config.headers.Authorization = `Bearer ${response.data['accessToken']}`
    // }

    config.headers.Authorization = `Bearer 43553`

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// axios.interceptors.response.use(
//   (resp) => resp,
//   async (error) => {
//     refresh = true

//       const tempUser = localStorage.getItem('testingAuthData')
//       const user = tempUser && JSON.parse(tempUser)

//       const response = await axios.post(
//         'token',
//         { token: user['refreshToken'] },
//         { withCredentials: true }
//       )

//       if (response.status === 200) {
//         axios.defaults.headers.common[
//           'Authorization'
//         ] = `Bearer ${response.data['accessToken']}`

//         return axios(error.config)
//       }
//     refresh = false
//     return error
//   }
// )
