import axios from 'axios'
import { history } from '..'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'

const initialState = {
  login: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.login }
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    case LOGIN: {
      return { ...state, password: '' }
    }
    default:
      return state
  }
}

export function updateLoginField(login) {
  return { type: UPDATE_LOGIN, login }
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function signIn() {
  return (dispatch, getState) => {
    const { login, password } = getState().auth
    axios({
      method: 'post',
      url: '/v3/auth/login',
      baseURL: 'http://transstage1.iwayex.com/transnextgen',
      data: { login, password }
    })
      .then(({ data }) => {
        if (data.result) {
          localStorage.setItem('token', data.result.token)
          dispatch({ type: LOGIN })
          history.push('/private')
        }
        if (data.error) {
          console.log(data.error.message)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
