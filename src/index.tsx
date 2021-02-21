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
import Post from './components/Post'

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
      {window.location.pathname.includes('/social-network') && <Redirect to='/' />}
      <Header currentUserId={store.currentUserId} />
      <App height={window.innerHeight + 'px'}>
        <Route path='/' exact component={() => <Feed store={store} />} />
        <Route path='/explore' component={() => <Explore store={store} />} />
        <Route path='/chats' render={() => <Chats store={store} />} />
        <Route
          exact
          path='/user/:userId'
          component={() => (
            <Profile
              userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
              store={store}
            />
          )}
        />
        <Route
          exact
          path={'/user/:userId/followers'}
          component={() => (
            <Followers
              userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
              store={store}
            />
          )}
        />
        <Route
          exact
          path={'/user/:userId/following'}
          component={() => (
            <Following
              userId={parseInt(window.location.pathname.replace(/[^0-9\.]+/g, ''))}
              store={store}
            />
          )}
        />
        <Route
          path='/chat/:userId'
          component={() => (
            <Chat
              store={store}
              userId={parseInt(
                window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
              )}
            />
          )}
        />
        <Route
          exact
          path='/liked'
          component={() => (
            <Container>
              {store.users.map((user) =>
                user.posts.map(
                  (post) =>
                    store.users[store.currentUserId].likedPosts.includes(post.id) && (
                      <Post
                        id={post.id}
                        user={user}
                        date={post.date}
                        text={post.text}
                        img={post.img}
                        likes={
                          store.users.filter((user) => user.likedPosts.includes(post.id)).length
                        }
                        store={store}
                      />
                    )
                )
              )}
            </Container>
          )}
        />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
