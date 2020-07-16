import React from 'react'
import Head from './head'
import LoginForm from './login'

const Home = () => {
  return (
    <div>
      <Head title="Log In" />
      <LoginForm />
    </div>
  )
}

Home.propTypes = {}

export default Home