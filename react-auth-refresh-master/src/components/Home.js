import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { actionData, privateRoute } from '../interceptors/fetch'

export const Home = () => {
  const [navigate, setNavigate] = useState(false)

  //   useEffect(() => {
  //     const { data } = privateRoute({ method: 'GET', route: 'users' })
  //   }, [])

  const examplePrivateAPICall = async () => {
    const { data } = privateRoute({ method: 'GET', route: 'users' })
    console.log(data)
  }

  const examplePublicAPICall = async () => {
    const { data } = actionData({ method: 'GET', route: 'countries' })
    console.log(data)
  }

  const logout = async () => {
    setNavigate(true)
  }

  if (navigate) {
    return <Navigate to="/login" />
  }

  return (
    <div className="form-signin mt-5 text-center">
      <h3>Hi</h3>

      <div className="row mb-4">
        <a
          href="javascript:void(0)"
          className="btn  btn-primary mb-4"
          onClick={examplePrivateAPICall}
        >
          Private route call
        </a>

        <a
          href="javascript:void(0)"
          className="btn  btn-primary mb-4 "
          onClick={examplePublicAPICall}
        >
          Public route call
        </a>
      </div>

      <a
        href="javascript:void(0)"
        className="btn btn-lg btn-primary"
        onClick={logout}
      >
        Logout
      </a>
    </div>
  )
}

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Navigate } from 'react-router-dom'
// import { privateRoute } from '../interceptors/fetch'

// export const Home = () => {
//   const [name, setName] = useState('')
//   const [navigate, setNavigate] = useState(false)

//   useEffect(() => {
//     const { data } = privateRoute({ method: 'GET', route: 'users' })
//   }, [])

//   const logout = async () => {
//     // await axios.post('logout', {}, { withCredentials: true })
//     setNavigate(true)
//   }

//   if (navigate) {
//     return <Navigate to="/login" />
//   }

//   return (
//     <div className="form-signin mt-5 text-center">
//       <h3>Hi {name}</h3>

//       <a
//         href="javascript:void(0)"
//         className="btn btn-lg btn-primary"
//         onClick={logout}
//       >
//         Private route call
//       </a>

//       <a
//         href="javascript:void(0)"
//         className="btn btn-lg btn-primary"
//         onClick={logout}
//       >
//         Public route call
//       </a>

//       <a
//         href="javascript:void(0)"
//         className="btn btn-lg btn-primary"
//         onClick={logout}
//       >
//         Logout
//       </a>
//     </div>
//   )
// }
