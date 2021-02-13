import React, { useState } from 'react'
import styled from 'styled-components'
import Feed from './Feed'
import Profile from './Profile'
import Chats from './Chats'
import { BrowserRouter, Route } from 'react-router-dom'
import Chat from './Chat'
import Search from './Search'
import Header from './Header'
import store from '../store'

const AppContainer = styled.div<{ height: string }>`
  max-width: 800px;
  width: 100%;
  height: ${(props) => props.height};
  margin: 0 auto;
  display: flex;
`

const Container = styled.div`
  display: flex;
`

export default function App() {
  return (
    <BrowserRouter>
      <Header currentUserId={store.currentUserId} />
      <AppContainer height={window.innerHeight + 'px'}>
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
      </AppContainer>
    </BrowserRouter>
  )
}
