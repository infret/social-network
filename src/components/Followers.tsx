import React from 'react'
import styled from 'styled-components'
import { IStore } from '../store'
import User from './User'

interface propsInterface {
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
  font-size: 20px;
  margin: 10px 0;
  text-align: center;
`

export default function Followers(props: propsInterface) {
  document.title = props.store.users[props.userId].username + "'s followers"
  return (
    <Page>
      <Heading>
        {props.store.users.filter((user) => user.following.includes(props.userId)).length > 0
          ? props.store.users[props.userId].username + "'s followers"
          : props.store.users[props.userId].username + ' has no followers'}
      </Heading>
      {props.store.users
        .filter((user) => user.following.includes(props.userId))
        .map((user) => (
          <User user={user} link='/user/' />
        ))}
    </Page>
  )
}
