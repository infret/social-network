import React from 'react'
import styled from 'styled-components'
import TextareaForm from './TextareaForm'
import { IStore } from '../store'

const PageContent = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: column;
`

const Messages = styled.div``

const StyledMessage = styled.div`
  width: 100%;
  height: auto;
  text-decoration: none;
  color: black;
  display: grid;
  grid-template-areas: 'avatar name date' 'avatar text text';
  grid-template-columns: 74px 1fr 148px;
  grid-template-rows: 37px 1fr;
`

const Name = styled.p`
  grid-area: name;
  align-self: start;
`

const Date = styled.p`
  color: #999;
  font-size: 14px;
  grid-area: date;
  text-align: end;
  margin: 12px;
`

const Text = styled.pre`
  color: #333;
  grid-area: text;
  white-space: pre-wrap;
  align-self: center;
  padding-right: 6px;
`

interface propsInterface {
  store: IStore
  userId: number
}

export default function Chat(props: propsInterface) {
  document.title = 'Dialog with ' + props.store.users[props.userId].username
  return (
    <>
      <PageContent>
        <Messages>
          {props.store.messages
            .filter(
              (message) =>
                message.sender_id ===
                  parseInt(
                    window.location.pathname.substring(
                      window.location.pathname.lastIndexOf('/') + 1
                    )
                  ) && message.recipient_id === props.store.currentUserId
            )
            .map((message, index) => (
              <StyledMessage key={index}>
                <Name>{message.sender_username}</Name>
                <Text>{message.text}</Text>
                <Date>{message.date}</Date>
              </StyledMessage>
            ))}
        </Messages>
        {/* <TextareaForm
          icon={BlueSendIcon}
          placeholder='Your message'
          onclick={props.addMessage}
        /> */}
      </PageContent>
    </>
  )
}
