import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomepageRoutes from './homepage';
import UserRoutes from './users';
import ProfileRoutes from './profile';
import ReduxRoute from './redux-test';
import ReduxRoute2 from './redux-test-2';
import ReduxFromScratchRoute from './redux-from-scratch'

const Router = (props) => {
  const { userData, postData } = props
  const userId = '666'

  // TODO update state to a single user rather than hacking like this
  let specificUserData = null;
  userData &&
    userData.map((user, index) => {
      // for third user iterated, staticly update the user ID for testing only. TODO: remove this later
      if (index === 2) user.id.value = userId

      if (user.id.value === userId) {
        specificUserData = user
        return specificUserData
      }
      return false
    })

  return (
    <BrowserRouter>
      <div className="page-content">
        <Route exact={true} path='/' render={() => (
          <HomepageRoutes
            postData={postData}
            handleLikeClick={props.handleLikeClick}
            handleOpenCommentClick={props.handleOpenCommentClick}
            handleAddCommentClick={props.handleAddCommentClick}
            handleSeeCommentsClick={props.handleSeeCommentsClick}
          />
        )} />
        <Route exact={true} path='/users' render={() => (
          userData &&
          <UserRoutes userData={userData} />
        )} />
        <Route exact={true} path='/profile' render={() => (
          userData &&
          <ProfileRoutes
            userData={specificUserData}
            postData={postData}
            handleLikeClick={props.handleLikeClick}
            handleOpenCommentClick={props.handleOpenCommentClick}
            handleAddCommentClick={props.handleAddCommentClick}
            handleSeeCommentsClick={props.handleSeeCommentsClick}
          />
        )} />
        <Route exact={true} path='/redux-test' render={() => (
          <ReduxRoute />
        )} />
        <Route exact={true} path='/redux-test-2' render={() => (
          <ReduxRoute2 />
        )} />
        <Route exact={true} path='/redux-from-scratch' render={() => (
          <ReduxFromScratchRoute />
        )} />
      </div>
    </BrowserRouter> 
  )
}

export default Router