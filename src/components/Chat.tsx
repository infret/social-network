import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import { IStore, timeSince } from '../store'
import { observer } from 'mobx-react-lite'
import User from './User'

const Page = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  width: 100%;
  grid-area: 'chat';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-left: 1px solid gainsboro;
  border-right: 1px solid gainsboro;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gainsboro;
`

const Messages = styled.div`
  max-width: 680px;
  min-width: 320px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;
`

const MessageBubble = styled.div`
  border: 1px solid gainsboro;
  border-radius: 15px;
  max-width: 320px;
  padding: 10px 14px;
  margin: 2px 12px;
  word-break: break-word;
  white-space: pre-wrap;
`

const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Date = styled.p`
  color: grey;
  font-size: 13px;
  white-space: nowrap;
  margin: 15px;
`

const InputContainer = styled.div`
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

interface Props {
  store: IStore
  userId: number
}

const Chat = observer((props: Props) => {
  props.userId >= 0
    ? (document.title = 'Chat with ' + props.store.users[props.userId].username)
    : (document.title = 'Chats')

  function getMessages() {
    let messages: any[] = []
    props.userId >= 0 &&
      props.store.users[props.store.currentUserId].messages.map(
        (message) => message.recipient_id === props.userId && messages.push(message)
      ) &&
      props.store.users[props.userId].messages.map(
        (message) => message.recipient_id === props.store.currentUserId && messages.push(message)
      )
    return messages
  }
  return (
    <Page height={window.innerHeight - 52 + 'px'}>
      {props.userId >= 0 && (
        <Header>
          <User user={props.store.users[props.userId]} link='/social-network/user/' />
        </Header>
      )}
      <Messages>
        {props.userId >= 0 ? (
          getMessages()
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
        <InputContainer>
          <Input
            onclick={props.store.createMessage}
            id={props.userId}
            placeholder={'Add a message'}
          />
        </InputContainer>
      )}
    </Page>
  )
})
export default Chat
