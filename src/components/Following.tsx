import React from 'react'
import styled from 'styled-components'
import { IStore } from '../store'
import User from './User'

interface Props {
  store: IStore
  userId: number
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px auto;
  align-items: center;
`

const Heading = styled.h1`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`

export default function Following(props: Props) {
  document.title = props.store.users[props.userId].username + ' is following'
  return (
    <Page>
      <Heading>
        {props.store.users[props.userId].following.length > 0
          ? props.store.users[props.userId].username + ' is following'
          : props.store.users[props.userId].username + " doesn't follow anyone"}
      </Heading>
      {props.store.users[props.userId].following.map((userId) => (
        <User user={props.store.users[userId]} link='/social-network/user/' />
      ))}
    </Page>
  )
}
