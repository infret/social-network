import { createGlobalStyle } from 'styled-components'
import * as ReactDOM from 'react-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Chats from './components/Chats'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Explore from './components/Explore'
import Header from './components/Header'
import store from './store'
import Followers from './components/Followers'
import Following from './components/Following'
import Liked from './components/Liked'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: none;
		font-family: sans-serif;
		resize: none;
		outline: none;
		background-color: transparent;
    color: black;
    text-decoration: none;
	}
`

const Container = styled.div`
  width: 100%;
  padding: 6px 12px;
`

const App = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header currentUserId={store.currentUserId} />
      <App>
        <Route path='/social-network' exact component={() => <Feed store={store} />} />
        <Route path='/social-network/explore' component={() => <Explore store={store} />} />
        <Route path='/social-network/chats' render={() => <Chats store={store} />} />
        <Route
          exact
          path='/social-network/user/:userId'
          component={() => (
            <Profile
              userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
              store={store}
            />
          )}
        />
        <Route
          exact
          path={'/social-network/user/:userId/followers'}
          component={() => (
            <Followers
              userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
              store={store}
            />
          )}
        />
        <Route
          exact
          path={'/social-network/user/:userId/following'}
          component={() => (
            <Following
              userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
              store={store}
            />
          )}
        />
        <Route
          path='/social-network/chat/:userId'
          component={() => (
            <Chat
              store={store}
              userId={parseInt(
                window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
              )}
            />
          )}
        />
        <Route exact path='/social-network/liked' component={() => <Liked store={store} />} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
