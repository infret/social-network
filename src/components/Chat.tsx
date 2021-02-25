import React from 'react'
import styled from 'styled-components'
import TextareaForm from './TextareaForm'
import { IStore, timeSince } from '../store'
import User from './User'
import { observer } from 'mobx-react-lite'

const Page = styled.div<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};
  position: relative;
`

const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

const MessageBubble = styled.div`
  border: 1px solid gainsboro;
  border-radius: 15px;
  max-width: 320px;
  padding: 10px 14px;
  margin: 0 12px;
`

const Date = styled.p`
  color: grey;
  font-size: 14px;
  white-space: nowrap;
  margin: 12px;
`

const Chats = styled.div`
  width: 320px;
  border-left: 1px solid gainsboro;
`

const Messages = styled.div`
  width: 660px;
  height: 100%;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 60px;
  box-sizing: border-box;
`

const Input = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 660px;
  border-top: 1px solid gainsboro;
`

interface Props {
  store: IStore
  userId: number
}

const Chat = observer((props: Props) => {
  document.title = 'Chat with ' + props.store.users[props.userId].username
  let chats: any[] = []
  props.store.users.filter(
    (user) =>
      user.id !== props.store.currentUserId &&
      user.messages.filter(
        (message) => message.recipient_id === props.store.currentUserId && chats.push(user)
      )
  )
  let messages: any[] = []
  props.store.users[props.store.currentUserId].messages.filter(
    (message) => message.recipient_id === props.userId && messages.push(message)
  )
  props.store.users.map((user) =>
    user.messages.filter(
      (message) => message.recipient_id === props.store.currentUserId && messages.push(message)
    )
  )
  return (
    <Page height={window.innerHeight - 52 + 'px'}>
      <Chats>
        {chats.map((user) => (
          <User user={user} link='/social-network/chat/' />
        ))}
      </Chats>
      <Messages>
        {messages
          .sort((a, b) => b.date - a.date)
          .map((message) =>
            message.recipient_id !== props.store.currentUserId ? (
              <Message>
                <Date>{timeSince(message.date)}</Date>
                <MessageBubble>{message.text}</MessageBubble>
              </Message>
            ) : (
              <Message>
                <MessageBubble>{message.text}</MessageBubble>
                <Date>{timeSince(message.date)}</Date>
              </Message>
            )
          )}
      </Messages>
      <Input>
        <TextareaForm
          onclick={props.store.createMessage}
          id={props.userId}
          placeholder={'Add a message'}
        />
      </Input>
    </Page>
  )
})
export default Chat
