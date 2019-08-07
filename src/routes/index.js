import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import HomepageRoutes from './homepage';
import UserRoutes from './users';

const Router = (props) => {
  const { userData } = props
  return (
    <BrowserRouter>
      <div className="page-content">
        <Route exact={true} path='/' render={() => (
          <HomepageRoutes />
        )}/>
        <Route exact={true} path='/users' render={() => (
          <UserRoutes userData={userData} />
        )} />
      </div>
    </BrowserRouter>
  )
}

export default Router