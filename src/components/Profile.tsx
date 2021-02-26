import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { IStore } from '../store'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
`

const ProfileDesc = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
`

const Avatar = styled.img`
  height: 30vw;
  width: 30vw;
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 12px;
`

const DescBody = styled.div`
  width: 100%;
  max-width: 320px;
`

const Name = styled.h2`
  font-size: 20px;
`

const Button = styled.button`
  border-radius: 4px;
  border: 1px solid gainsboro;
  padding: 0 12px;
  height: 30px;
  margin: 6px;
  font-size: 14px;
  cursor: pointer;
`

const LinkButton = styled(NavLink)`
  border-radius: 4px;
  border: 1px solid gainsboro;
  padding: 6px 12px;
  margin: 6px;
  font-size: 14px;
`

const Status = styled.pre`
  word-break: break-word;
  white-space: pre-wrap;
  margin: 6px 12px;
`

const Posts = styled.div`
  width: 100%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 0 12px;
`

interface Props {
  store: IStore
  userId: number
}

const Profile = observer((props: Props) => {
  document.title = props.store.users[props.userId].username + ' profile'
  return (
    <Page>
      <ProfileDesc>
        <Avatar src={props.store.users[props.userId].avatar} />
        <DescBody>
          <Container>
            <Name>{props.store.users[props.userId].username}</Name>
            {props.userId !== props.store.currentUserId ? (
              <div>
                <LinkButton to={'/social-network/chat/' + props.userId}>Message</LinkButton>
                <Button onClick={() => props.store.toggleFollow(props.userId)}>
                  {props.store.users[props.store.currentUserId].following.includes(props.userId)
                    ? 'Unfollow'
                    : 'Follow'}
                </Button>
              </div>
            ) : <LinkButton to={'/social-network/login'}>Logout</LinkButton>}
          </Container>
          <Status>{props.store.users[props.userId].status}</Status>
          <Container>
            <p>
              {props.store.users[props.userId].posts.length} post
              {props.store.users[props.userId].posts.length != 1 && 's'}
            </p>
            <NavLink to={'/social-network/user/' + props.userId + '/followers'}>
              {props.store.users.filter((user) => user.following.includes(props.userId)).length}{' '}
              follower
              {props.store.users.filter((user) => user.following.includes(props.userId)).length !=
                1 && 's'}
            </NavLink>
            <NavLink to={'/social-network/user/' + props.userId + '/following'}>
              {props.store.users[props.userId].following.length} following
            </NavLink>
          </Container>
        </DescBody>
      </ProfileDesc>
      <Posts>
        {props.store.users[props.userId].posts
          .slice()
          .sort((a, b) => b.date - a.date)
          .map((post) => (
            <Post
              id={post.id}
              user={props.store.users[props.userId]}
              date={post.date}
              img={post.img}
              likes={props.store.users.filter((user) => user.likedPosts.includes(post.id)).length}
              store={props.store}
            />
          ))}
      </Posts>
    </Page>
  )
})
export default Profile
