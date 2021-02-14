import { createGlobalStyle } from 'styled-components'
import * as ReactDOM from 'react-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Chats from './components/Chats'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Search from './components/Search'
import Header from './components/Header'
import store from './store'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: none;
		font-family: sans-serif;
		resize: none;
		outline: none;
		background-color: transparent;
	}
`

const App = styled.div<{ height: string }>`
  max-width: 800px;
  width: 100%;
  height: ${(props) => props.height};
  margin: 0 auto;
  display: flex;
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Redirect to='/' />
      <Header currentUserId={store.currentUserId} />
      <App height={window.innerHeight + 'px'}>
        <Route path='/' exact component={() => <Feed store={store} />} />
        <Route path='/search' component={() => <Search store={store} />} />
        <Route path='/chats' render={() => <Chats store={store} />} />
        <Route
          path='/user/'
          component={() => (
            <Profile
              userId={parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))}
              store={store}
            />
          )}
        />
        <Route
          path='/chat/'
          component={() => (
            <Chat
              store={store}
              userId={parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))}
            />
          )}
        />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
