import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {

  const error = useRouteError();

  return (
    <div>
      <h2>Something went wrong...</h2>
      <p>{error.data || error.message}</p>
      <Link to={-1}>Go Back</Link>
    </div>
  )
}

export default Error