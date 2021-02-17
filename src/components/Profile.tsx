import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import Avatar from './Avatar'
import { IStore } from '../store'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

const Page = styled.div`
  width: 100%;
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileDetails = styled.div`
  display: flex;
  padding-right: 8px;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 12px 0;
`

const Name = styled.h2`
  font-size: 20px;
`

const ProfileDesc = styled.pre`
  margin: 8px;
  word-break: break-word;
  white-space: pre-wrap;
  width: 100%;
`

const BigAvatar = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin-right: 8px;
  object-fit: cover;
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
  font-size: 14px;
`

const LinkButton = styled(NavLink)`
  border-radius: 4px;
  border: 1px solid gainsboro;
  padding: 6px 12px;
  margin: 6px;
  font-size: 14px;
`

const StyledDiv = styled.div`
  width: 100%;
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
        <StyledDiv>
          <Container>
            <Name>{props.store.users[props.userId].username}</Name>
            <div>
              <LinkButton to={'/chat/' + props.userId}>Message</LinkButton>
              <Button>Follow</Button>
            </div>
          </Container>
          <ProfileDesc>{props.store.users[props.userId].status}</ProfileDesc>
          <Container>
            <p>
              {props.store.posts.filter((post) => post.sender_id === props.userId).length} post
              {props.store.posts.filter((post) => post.sender_id === props.userId).length != 1 &&
                's'}
            </p>
            <p>20 followers</p>
            <p>20 following</p>
          </Container>
        </StyledDiv>
      </ProfileDetails>
      {props.store.posts
        .filter((post) => post.sender_id === props.userId)
        .map((post, index) => (
          <Post
            id={index}
            user={props.store.users[post.sender_id]}
            date={post.date}
            text={post.text}
            img={post.img}
            likes={props.store.users.filter((user) => user.likedPosts.includes(index)).length}
            store={props.store}
          />
        ))}
    </Page>
  )
})
export default Profile
