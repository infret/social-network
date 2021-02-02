import React from 'react'
import styled from 'styled-components'
import PageHeader from './PageHeader'
import Card from './Card'
import Post from './Post'
import { dataInterface, renderInterface } from '../store'

const PageContent = styled.div`
  margin-top: 6px;
`

const ProfileDescription = styled(Card)`
  display: grid;
  grid-template-areas: 'avatar name' 'avatar status' 'details details';
  grid-template-columns: 102px 1fr;
  grid-template-rows: 51px 51px 1fr;
  margin-top: 6px;
`

const StyledAvatar = styled.img`
  height: 78px;
  width: 78px;
  border-radius: 50%;
  margin: 12px;
`

const Name = styled.p`
  font-size: 20px;
  align-self: start;
`

const Status = styled.p`
  color: #999;
  font-size: 15px;
  grid-area: status;
`

interface propsInterface {
  data: dataInterface
  userId: number
  getPosts: (sender_id?: number) => Array<renderInterface>
}

export default function Profile(props: propsInterface) {
  document.title = props.data.users[props.userId].name
  return (
    <div>
      <PageHeader title='Profile' />
      <PageContent>
        <ProfileDescription>
          <StyledAvatar src={props.data.users[props.userId].avatar} />
          <Name>{props.data.users[props.userId].name}</Name>
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
      </PageContent>
    </div>
  )
}
