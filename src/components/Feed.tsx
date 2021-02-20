import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { observer } from 'mobx-react-lite'
import { IStore } from '../store'

const Container = styled.div`
  width: 100%;
  padding: 6px 12px;
`

interface Props {
  store: IStore
}

const Feed = observer((props: Props) => (
  <Container>
    {props.store.users.filter((user) => props.store.users[props.store.currentUserId].following.includes(user.id)).map(user => user.posts.map((post) => (
        <Post
          id={post.id}
          user={props.store.users[user.id]}
          date={post.date}
          text={post.text}
          img={post.img}
          likes={props.store.users.filter((user) => user.likedPosts.includes(post.id)).length}
          store={props.store}
        />
      )))}
  </Container>
))
export default Feed
