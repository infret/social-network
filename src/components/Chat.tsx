import React from 'react'
import styled from 'styled-components'
import TextareaForm from './TextareaForm'
import { IStore } from '../store'

const StyledMessage = styled.div`
  width: 200px;
  height: auto;
  text-decoration: none;
  color: black;
  display: grid;
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

interface Props {
  store: IStore
  userId: number
}

export default function Chat(props: Props) {
  document.title = 'Chat with ' + props.store.users[props.userId].username
  return (
    <>
      <div>
        {props.store.users[props.store.currentUserId].messages
          .filter((message) => message.recipient_id === props.userId)
          .map((message) => (
            <StyledMessage>{message.text}</StyledMessage>
          ))}
      </div>
      {/* <TextareaForm
          icon={BlueSendIcon}
          placeholder='Your message'
          onclick={props.addMessage}
        /> */}
    </>
  )
}
