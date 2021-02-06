import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { stateInterface, renderInterface } from '../types'
import Avatar from './Avatar'

const ProfileDescription = styled.div`
  display: flex;
`

const Name = styled.h2`
  font-size: 18px;
  font-weight: normal;
`

const Status = styled.p`
  color: #999;
  font-size: 15px;
  grid-area: status;
`

interface propsInterface {
  data: stateInterface
  userId: number
  getPosts: (sender_id?: number) => renderInterface[]
}

export default function Profile(props: propsInterface) {
  document.title = props.data.users[props.userId].username + 'profile'
  return (
    <>
      <ProfileDescription>
        <Avatar
          src={props.data.users[props.userId].avatar}
          userId={props.userId}
        />
        <Name>{props.data.users[props.userId].username}</Name>
        <Status>Ban</Status>
      </ProfileDescription>
      {props.getPosts(props.userId).map((post, index) => (
        <Post
          id={index}
          key={index}
          name={post.name}
          avatar={post.avatar}
          text={post.text}
          date={post.date}
        />
      ))}
    </>
  )
}
