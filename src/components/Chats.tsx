import { observer } from 'mobx-react-lite'
import React from 'react'
import styled from 'styled-components'
import { IStore } from '../store'
import User from './User'

const Page = styled.div`
  width: 320px;
  border-left: 1px solid gainsboro;
  grid-area: 'chats';
`

interface Props {
  store: IStore
}

const Chats = observer((props: Props) => {
  let chats: any[] = []
  props.store.users.filter(
    (user) =>
      user.id !== props.store.currentUserId &&
      user.messages.filter(
        (message) => message.recipient_id === props.store.currentUserId && chats.push(user)
      )
  )
  props.store.users[props.store.currentUserId].messages.map((message) =>
    chats.push(props.store.users[message.recipient_id])
  )
  document.title = 'Chats'
  return (
    <Page>
      {chats
        .filter((item, pos) => chats.indexOf(item) === pos)
        .map((user) => (
          <User user={user} link='/social-network/chat/' />
        ))}
    </Page>
  )
})
export default Chats
