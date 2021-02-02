import React, { useState } from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Profile from './Profile'
import Messenger from './Messenger'
import Friendlist from './Friendlist'
import Search from './Search'
import { BrowserRouter, Route } from 'react-router-dom'
import Dialog from './Dialog'
import { data, getCurrentDate, renderInterface } from '../store'
import Bottombar from './Bottombar'
import BigLogo from '../resources/logo.svg'

const AppContainer = styled.div`
  max-width: 800px;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  padding-top: 60px;
`

const AppHeader = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
`

const HeaderContainer = styled.div`
  width: 100vw;
  max-width: 800px;
  height: 50px;
  padding: 10px 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AppContent = styled.div`
  width: 100%;
`

const AppLogo = styled.img`
  margin: 8px;
  height: 36px;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`

export default function App() {
  const [posts, setPost] = useState(data.posts)
  const [messages, setMessage] = useState(data.messages)

  function addPost(postText: string) {
    if (postText) {
      setPost((prev) => [
        ...prev,
        {
          sender_id: data.currentUserId,
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
          sender_id: data.currentUserId,
          recipient_id: 1,
          text: messageText,
          date: getCurrentDate()
        }
      ])
    }
  }

  function getPosts(sender_id: number = -1) {
    let postsToRender: Array<renderInterface> = []
    posts.forEach((item, i) => {
      if (sender_id === -1) {
        postsToRender.push({
          sender_id: posts[i].sender_id,
          name: data.users[posts[i].sender_id].name,
          avatar: data.users[posts[i].sender_id].avatar,
          text: posts[i].text,
          date: posts[i].date
        })
      } else {
        if (posts[i].sender_id === sender_id) {
          postsToRender.push({
            sender_id: posts[i].sender_id,
            name: data.users[sender_id].name,
            avatar: data.users[sender_id].avatar,
            text: posts[i].text,
            date: posts[i].date
          })
        }
      }
    })
    return postsToRender
  }

  function getMessages(companion_id: number) {
    let messagesToRender: Array<renderInterface> = []
    messages.forEach((item, i) => {
      if (
        (messages[i].sender_id === companion_id &&
          messages[i].recipient_id === data.currentUserId) ||
        (messages[i].sender_id === data.currentUserId &&
          messages[i].recipient_id === companion_id)
      ) {
        messagesToRender.push({
          sender_id: messages[i].sender_id,
          name: data.users[messages[i].sender_id].name,
          avatar: data.users[messages[i].sender_id].avatar,
          text: messages[i].text,
          date: messages[i].date
        })
      }
    })
    return messagesToRender
  }

  function getDialogs() {
    let dialogsToRender: Array<renderInterface> = []
    messages.forEach((item, i) => {
      if (messages[i].recipient_id === data.currentUserId) {
        dialogsToRender.push({
          sender_id: messages[i].sender_id,
          name: data.users[messages[i].sender_id].name,
          avatar: data.users[messages[i].sender_id].avatar,
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
        <HeaderContainer>
          <LogoContainer>
            {' '}
            <AppLogo src={BigLogo} />
            Social network
          </LogoContainer>
          <Sidebar currentUserId={data.currentUserId} />
        </HeaderContainer>
      </AppHeader>
      <AppContainer>
        <AppContent>
          <Route
            path='/user/'
            component={() => (
              <Profile
                data={data}
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
            path='/feed'
            component={() => <Feed getPosts={getPosts} addPost={addPost} />}
          />
          <Route
            path='/messenger'
            component={() => <Messenger data={data} getDialogs={getDialogs} />}
          />
          <Route
            path='/dialog/'
            component={() => (
              <Dialog
                data={data}
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
          <Route path='/friends' component={() => <Friendlist data={data} />} />
          <Route path='/search' component={() => <Search data={data} />} />
        </AppContent>
        <Bottombar currentUserId={data.currentUserId} />
      </AppContainer>
    </BrowserRouter>
  )
}
