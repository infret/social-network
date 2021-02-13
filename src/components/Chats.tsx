import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Avatar from './Avatar'
import { NavLink } from 'react-router-dom'
import Chat from './Chat'
import { IStore } from '../store'

const Page = styled.div`
  display: flex;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const DialogLink = styled(NavLink)`
  height: 74px;
  width: 100%;
  text-decoration: none;
  color: black;
  display: grid;
  grid-template-areas: 'avatar name date' 'avatar text text';
  grid-template-columns: 74px 1fr 148px;
  grid-template-rows: 37px 37px;
`

const Name = styled.p`
  grid-area: name;
  align-self: start;
`

const LastMessage = styled.p`
  color: #999;
  grid-area: text;
  align-self: end;
  font-size: 15px;
`

const Date = styled.p`
  color: #999;
  grid-area: date;
  align-self: end;
  font-size: 14px;
  text-align: end;
  margin: 12px;
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
          .map((dialog, i) => (
            <DialogLink key={i} to={'/chat/' + dialog.sender_id}>
              <Avatar src={dialog.sender_avatar} userId={dialog.sender_id} />
              <Name>{dialog.sender_username}</Name>
              <Date>{dialog.date}</Date>
              <LastMessage>{dialog.text}</LastMessage>
            </DialogLink>
          ))}
      </Container>
    </Page>
  )
}
