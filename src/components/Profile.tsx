import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import Avatar from './Avatar'
import { IStore } from '../mobx-store'
import { observer } from 'mobx-react-lite'

const ProfileHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin: 12px;
`

const ProfileDetails = styled.div`
  width: 300px;
`

const Name = styled.h2`
  font-size: 20px;
  margin: 6px;
`

const Text = styled.p`
  margin: 6px;
`

const ProfileDesc = styled.pre`
  margin: 0 18px;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  padding: 6px 12px;
`

const BigAvatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 12px;
`

const Button = styled.button`
  border-radius: 4px;
  height: 32px;
  border: 1px solid gainsboro;
  margin: 6px;
`

interface propsInterface {
  store: IStore
  userId: number
}

const Profile = observer((props: propsInterface) => {
  document.title = props.store.users[props.userId].username + ' profile'
  return (
    <div>
      <ProfileHead>
        <BigAvatar src={props.store.users[props.userId].avatar} />
        <ProfileDetails>
          <ProfileHead>
            <Name>{props.store.users[props.userId].username}</Name>
            <Button>Message</Button>
            <Button>Follow</Button>
            <Text>20 posts</Text>
            <Text>20 followers</Text>
            <Text>20 following</Text>
          </ProfileHead>
          <ProfileDesc>The Creator in person</ProfileDesc>
        </ProfileDetails>
      </ProfileHead>
      <Container>
        {props.store.posts
          .filter((post) => post.sender_id === props.userId)
          .map((post, index) => (
            <Post
              id={index}
              key={index}
              name={post.sender_username}
              avatar={post.sender_avatar}
              text={post.text}
              date={post.date}
            />
          ))}
      </Container>
    </div>
  )
})
export default Profile
