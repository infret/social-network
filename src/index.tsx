import { createGlobalStyle } from 'styled-components'
import * as ReactDOM from 'react-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Chats from './components/Chats'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import ChatPage from './components/Chat'
import Explore from './components/Explore'
import Header from './components/Header'
import store, { IStore } from './store'
import Followers from './components/Followers'
import Following from './components/Following'
import Liked from './components/Liked'
import Login from './components/Login'
import { observer } from 'mobx-react-lite'

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

const Main = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-areas: 'chats chat';
  width: 100%;

  @media (max-width: 639px) {
    grid-template-columns: 1fr;
  }
`

interface Props {
  store: IStore
}

const App = observer((props: Props) => {
  return (
    <BrowserRouter>
      {() => (document.title = 'Social network')}
      {console.log(props.store.currentUserId)}
      {props.store.currentUserId >= 0 ? (
        <>
          <Header store={props.store} />
          <Route path='/social-network/login' component={() => <Login store={props.store} />} />
          <Main>
            <Route
              path='/social-network/explore'
              component={() => <Explore store={props.store} />}
            />
            <Route path='/social-network' exact component={() => <Feed store={props.store} />} />
            <Route
              path='/social-network/chats'
              render={() => (
                <Container>
                  <Chats store={props.store} />
                  {window.innerWidth >= 640 && <ChatPage store={props.store} userId={-1} />}
                </Container>
              )}
            />
            <Route
              exact
              path='/social-network/user/:userId'
              component={() => (
                <Profile
                  userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
                  store={props.store}
                />
              )}
            />
            <Route
              exact
              path={'/social-network/user/:userId/followers'}
              component={() => (
                <Followers
                  userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
                  store={props.store}
                />
              )}
            />
            <Route
              exact
              path={'/social-network/user/:userId/following'}
              component={() => (
                <Following
                  userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
                  store={props.store}
                />
              )}
            />
            <Route
              path='/social-network/chat/:userId'
              component={() => (
                <Container>
                  {window.innerWidth >= 640 && <Chats store={props.store} />}
                  <ChatPage
                    store={props.store}
                    userId={parseInt(
                      window.location.pathname.substring(
                        window.location.pathname.lastIndexOf('/') + 1
                      )
                    )}
                  />
                </Container>
              )}
            />
            <Route
              exact
              path='/social-network/liked'
              component={() => <Liked store={props.store} />}
            />
          </Main>
        </>
      ) : (
        <Login store={props.store} />
      )}
    </BrowserRouter>
  )
})

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)
