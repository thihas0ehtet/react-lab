const API_URL = 'https://sandbox.thebagqueenmm.com'

export const actionData = async ({ method, route, data, token }) => {
  const header = token
    ? { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    : { 'Content-type': 'application/json' }

  try {
    const response = await fetch(`${API_URL}/${route}`, {
      method: method,
      headers: header,
      mode: 'cors',
      cache: 'default',
      body: data && JSON.stringify(data),
    })
    const json = await response.json()
    return json
  } catch (error) {
    return console.log('Something wrong!')
  }
}

export const privateRoute = async ({ method, route, data }) => {
  const tempUser = localStorage.getItem('testingAuthData')
  const user = tempUser && JSON.parse(tempUser)

  const { accessToken } = await actionData({
    method: 'POST',
    route: 'token',
    data: { token: user['refreshToken'] },
  })

  return actionData({
    method: method,
    route: route,
    data: data,
    token: accessToken,
  })
}
