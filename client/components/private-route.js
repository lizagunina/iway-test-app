import React from 'react'
import Head from './head'

const PrivateComponent = () => {
  return (
    <div>
      <Head title="Trips" />
      <div>private</div>
    </div>
  )
}

PrivateComponent.propTypes = {}

export default React.memo(PrivateComponent)
