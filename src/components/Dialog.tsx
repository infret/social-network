import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import TextareaForm from './TextareaForm'
import { stateInterface, renderInterface } from '../types'

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
  data: stateInterface
  userId: number
  getMessages: (companion_id: number) => renderInterface[]
  addMessage: (messageText: string) => void
}

export default function Dialog(props: propsInterface) {
  document.title = 'Dialog with ' + props.data.users[props.userId].username
  return (
    <>
      <PageContent>
        <Messages>
          {props
            .getMessages(
              parseInt(
                window.location.pathname.substring(
                  window.location.pathname.lastIndexOf('/') + 1
                )
              )
            )
            .map((message, index) => (
              <StyledMessage key={index}>
                <Avatar src={message.avatar} userId={message.sender_id} />
                <Name>{message.name}</Name>
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
