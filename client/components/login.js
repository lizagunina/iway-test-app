import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateLoginField, updatePasswordField, signIn } from '../redux/reducers/auth'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { login, password } = useSelector((s) => s.auth)
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <div className=" max-w-xs ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Login
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Login"
              value={login}
              onChange={(e) => {
                dispatch(updateLoginField(e.target.value))
              }}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) => {
                dispatch(updatePasswordField(e.target.value))
              }}
            />
          </div>
          <div className="mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-auto rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                dispatch(signIn())
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
LoginForm.propTypes = {}

export default LoginForm
