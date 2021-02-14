import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import Avatar from './Avatar'
import { IStore } from '../store'
import { observer } from 'mobx-react-lite'

const Page = styled.div`
  width: 100%;
  padding: 6px 12px;
`

const ProfileDetails = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  padding-right: 8px;
  align-items: center;
`

const Name = styled.h2`
  font-size: 20px;
`

const Text = styled.p``

const ProfileDesc = styled.pre`
  margin: 8px;
  width: 100%;
  word-break: break-all;
  white-space: pre-wrap;
`

const BigAvatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-right: 8px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  width: 100%;
  height: 40px;
`

const Button = styled.button`
  border-radius: 4px;
  border: 1px solid gainsboro;
  padding: 6px 12px;
  margin: 6px;
`

interface propsInterface {
  store: IStore
  userId: number
}

const Profile = observer((props: propsInterface) => {
  document.title = props.store.users[props.userId].username + ' profile'
  return (
    <Page>
      <ProfileDetails>
        <BigAvatar src={props.store.users[props.userId].avatar} />
        <div>
          <Container>
            <Name>{props.store.users[props.userId].username}</Name>
            <div>
              <Button>Message</Button>
              <Button>Follow</Button>
            </div>
          </Container>
          <ProfileDesc>
            {`The Creator in person
             Very long description of profile with
              some text and even
              probably links`}
          </ProfileDesc>
          <Container>
            <Text>
              {props.store.posts.filter((post) => post.sender_id === props.userId).length} post
              {props.store.posts.filter((post) => post.sender_id === props.userId).length > 1 && 's'}
            </Text>
            <Text>20 followers</Text>
            <Text>20 following</Text>
          </Container>
        </div>
      </ProfileDetails>
      {props.store.posts
        .filter((post) => post.sender_id === props.userId)
        .map((post) => (
          <Post user={props.store.users[post.sender_id]} date={post.date} text={post.text} />
        ))}
    </Page>
  )
})
export default Profile
