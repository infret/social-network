import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Feed from './Feed'
import Profile from './Profile'
import Messenger from './Messenger'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Dialog from './Dialog'
import { initialState, getCurrentDate } from '../store'
import { renderInterface } from '../types'
import LogoIcon from '../resources/logo.svg'
import Search from './Search'

const AppContainer = styled.div<{ height: string }>`
  position: relative;
  max-width: 800px;
  width: 100vw;
  height: ${(props) => props.height};
  margin: 0 auto;
  display: flex;
`

const AppHeader = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background: white;
  border-bottom: 1px solid gainsboro;
`

const HeaderLogo = styled(NavLink)`
  width: 100vw;
  max-width: 800px;
  height: 100%;
  margin: 0 auto;
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    display: none;
  }
`

const AppContent = styled.div`
  width: 100%;
  padding: 0 12px;
`

const Logo = styled.img`
  margin: 0 8px 0 16px;
  height: 28px;
`

export default function App() {
  const [posts, setPost] = useState(initialState.posts)
  const [messages, setMessage] = useState(initialState.messages)

  function addPost(postText: string) {
    if (postText) {
      setPost((prev) => [
        ...prev,
        {
          sender_id: initialState.currentUserId,
          text: postText,
          date: getCurrentDate()
        }
      ])
    }
  }

  function addMessage(messageText: string) {
    if (messageText) {
      setMessage((prev) => [
        ...prev,
        {
          sender_id: initialState.currentUserId,
          recipient_id: 1,
          text: messageText,
          date: getCurrentDate()
        }
      ])
    }
  }

  function getPosts(sender_id: number = -1) {
    let postsToRender: renderInterface[] = []
    posts.forEach((item, i) => {
      if (sender_id === -1) {
        postsToRender.push({
          sender_id: posts[i].sender_id,
          name: initialState.users[posts[i].sender_id].username,
          avatar: initialState.users[posts[i].sender_id].avatar,
          text: posts[i].text,
          date: posts[i].date
        })
      } else {
        if (posts[i].sender_id === sender_id) {
          postsToRender.push({
            sender_id: posts[i].sender_id,
            name: initialState.users[sender_id].username,
            avatar: initialState.users[sender_id].avatar,
            text: posts[i].text,
            date: posts[i].date
          })
        }
      }
    })
    return postsToRender
  }

  function getMessages(companion_id: number) {
    let messagesToRender: renderInterface[] = []
    messages.forEach((item, i) => {
      if (
        (messages[i].sender_id === companion_id &&
          messages[i].recipient_id === initialState.currentUserId) ||
        (messages[i].sender_id === initialState.currentUserId &&
          messages[i].recipient_id === companion_id)
      ) {
        messagesToRender.push({
          sender_id: messages[i].sender_id,
          name: initialState.users[messages[i].sender_id].username,
          avatar: initialState.users[messages[i].sender_id].avatar,
          text: messages[i].text,
          date: messages[i].date
        })
      }
    })
    return messagesToRender
  }

  function getDialogs() {
    let dialogsToRender: renderInterface[] = []
    messages.forEach((item, i) => {
      if (messages[i].recipient_id === initialState.currentUserId) {
        dialogsToRender.push({
          sender_id: messages[i].sender_id,
          name: initialState.users[messages[i].sender_id].username,
          avatar: initialState.users[messages[i].sender_id].avatar,
          text: messages[i].text,
          date: messages[i].date
        })
      }
    })
    return dialogsToRender
  }

  return (
    <BrowserRouter>
      <AppHeader>
        <HeaderLogo to='/'>
          <Logo src={LogoIcon} />
          Social network
        </HeaderLogo>
      </AppHeader>
      <AppContainer height={window.innerHeight + 'px'}>
        <Navbar currentUserId={initialState.currentUserId} />
        <AppContent>
          <Route
            path='/'
            exact
            component={() => <Feed getPosts={getPosts} addPost={addPost} />}
          />
          <Route
            path='/search'
            component={() => <Search data={initialState} />}
          />
          <Route
            path='/messenger'
            component={() => (
              <Messenger data={initialState} getDialogs={getDialogs} />
            )}
          />
          <Route
            path='/user/'
            component={() => (
              <Profile
                data={initialState}
                userId={parseInt(
                  window.location.pathname.substring(
                    window.location.pathname.lastIndexOf('/') + 1
                  )
                )}
                getPosts={getPosts}
              />
            )}
          />
          <Route
            path='/dialog/'
            component={() => (
              <Dialog
                data={initialState}
                userId={parseInt(
                  window.location.pathname.substring(
                    window.location.pathname.lastIndexOf('/') + 1
                  )
                )}
                getMessages={getMessages}
                addMessage={addMessage}
              />
            )}
          />
        </AppContent>
      </AppContainer>
    </BrowserRouter>
  )
}
