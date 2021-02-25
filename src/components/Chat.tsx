import React from 'react'
import styled from 'styled-components'
import TextareaForm from './TextareaForm'
import { IStore, timeSince } from '../store'
import { observer } from 'mobx-react-lite'
import User from './User'

const Page = styled.div<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};
  position: relative;
  width: 100%;
  grid-area: 'chat';
  border-right: 1px solid gainsboro;
`

const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MessageBubble = styled.div`
  border: 1px solid gainsboro;
  border-radius: 15px;
  max-width: 320px;
  padding: 10px 14px;
  margin: 0 12px;
  word-break: break-word;
  white-space: pre-wrap;
`

const Date = styled.p`
  color: grey;
  font-size: 13px;
  white-space: nowrap;
  margin: 15px;
`

const Messages = styled.div`
  max-width: 680px;
  min-width: 320px;
  width: 100%;
  height: 100%;
  border-left: 1px solid gainsboro;
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 60px;
  box-sizing: border-box;
  overflow: auto;
`

const Input = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 680px;
  border-top: 1px solid gainsboro;
`

const Placeholder = styled.h2`
  height: 50px;
  width: 100%;
  margin: auto 0;
  text-align: center;
`

const Header = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gainsboro;
`

interface Props {
  store: IStore
  userId: number
}

const Chat = observer((props: Props) => {
  props.userId >= 0
    ? (document.title = 'Chat with ' + props.store.users[props.userId].username)
    : (document.title = 'Chats')
  let messages: any[] = []
  props.userId >= 0 &&
    props.store.users[props.store.currentUserId].messages.filter(
      (message) => message.recipient_id === props.userId && messages.push(message)
    )
  props.userId >= 0 &&
    props.store.users.map((user) =>
      user.messages.filter(
        (message) => message.recipient_id === props.store.currentUserId && messages.push(message)
      )
    )
  return (
    <Page height={window.innerHeight - 52 + 'px'}>
      <Header>
        <User user={props.store.users[props.userId]} link='/social-network/user' />
      </Header>
      <Messages>
        {props.userId >= 0 ? (
          messages
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
            )
        ) : (
          <Placeholder>Select chat</Placeholder>
        )}
      </Messages>
      {props.userId >= 0 && (
        <Input>
          <TextareaForm
            onclick={props.store.createMessage}
            id={props.userId}
            placeholder={'Add a message'}
          />
        </Input>
      )}
      )
    </Page>
  )
})
export default Chat
