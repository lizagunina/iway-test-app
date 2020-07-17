import React from 'react'
import Head from './head'
import LoginForm from './login'

const LoginPage = () => {
  return (
    <div>
      <Head title="Log In" />
      <LoginForm />
    </div>
  )
}

LoginPage.propTypes = {}

export default LoginPage
