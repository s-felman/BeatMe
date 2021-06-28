import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'

import PrivateRoute from './private'

const RouteIf = ({ condition, privateRoute, path, component }) => {
  return condition ? (
    privateRoute ?
      <PrivateRoute path={path} component={component} /> :
      <Route path={path} component={component} />
    ):(
    <Redirect to="/" />
  )
}

export default RouteIf