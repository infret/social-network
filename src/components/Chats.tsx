import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Avatar from './Avatar'
import { NavLink } from 'react-router-dom'
import Chat from './Chat'
import { IStore } from '../store'
import User from './User'

const Page = styled.div`
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface propsInterface {
  store: IStore
}

export default function Chats(props: propsInterface) {
  document.title = 'Chats'
  return (
    <Page>
      <Container>
        <Searchbar />
        {props.store.messages
          .filter((message) => message.sender_id === props.store.currentUserId)
          .map((chat) => (
            <User user={props.store.users[chat.sender_id]} link='/chat/' />
          ))}
      </Container>
    </Page>
  )
}
