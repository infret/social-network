import { createGlobalStyle } from 'styled-components'
import ReactDOM from 'react-dom'
import React, { useEffect, useState, useLayoutEffect } from 'react'
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

const Body = styled.div`
  @media (max-width: 640px) {
    padding-bottom: 50px;
  }
`

const Main = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-areas: 'chats chat';
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

interface Props {
  store: IStore
}

const App = observer((props: Props) => {
  localStorage.getItem('store') &&
    useEffect(() => {
      props.store.loadStore()
    }, [])

  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(props.store))
  }, [props.store.currentUserId, props.store.users, props.store.searchBy])

  const [width, setWidth] = useState(window.innerWidth)
  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () => window.removeEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <BrowserRouter>
      {props.store.currentUserId >= 0 ? (
        <Body>
          {width >= 640 && <Header store={props.store} />}
          <Route render={() => <Redirect to='/social-network' />} />
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
                  {width >= 640 && <ChatPage store={props.store} userId={-1} />}
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
                  {width >= 640 && <Chats store={props.store} />}
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
            {width < 640 && <Header store={props.store} />}
          </Main>
        </Body>
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
