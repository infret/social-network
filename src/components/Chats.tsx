import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ChatPage from './Chat'
import { IStore } from '../store'
import User from './User'

const Page = styled.div`
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface Props {
  store: IStore
}

export default function Chats(props: Props) {
  document.title = 'Chats'
  return (
    <Page>
      <Container>
        {props.store.users
          .filter((user) =>
            user.messages.filter((message) => message.recipient_id === props.store.currentUserId)
          )
          .map((user) => (
            <User user={user} link='/social-network/chat/' />
          ))}
      </Container>
    </Page>
  )
}
