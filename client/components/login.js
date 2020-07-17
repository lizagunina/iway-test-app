import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateLoginField, updatePasswordField, signIn } from '../redux/reducers/auth'

import './login-page.scss'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { login, password } = useSelector((s) => s.auth)
  return (
    <div className="login-page">
      <form className="login">
        <div>
          <label className="login__label" htmlFor="username">
            Логин
          </label>
          <input
            className="login__input"
            id="username"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => {
              dispatch(updateLoginField(e.target.value))
            }}
          />
        </div>
        <div>
          <label className="login__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login__input"
            id="password"
            type="password"
            placeholder="**************"
            value={password}
            onChange={(e) => {
              dispatch(updatePasswordField(e.target.value))
            }}
          />
        </div>
        <div>
          <button
            className="button"
            type="button"
            onClick={() => {
              dispatch(signIn())
            }}
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  )
}
LoginForm.propTypes = {}

export default LoginForm
