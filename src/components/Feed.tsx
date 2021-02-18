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
    {props.store.posts.map((post, index) => (
      <Post
        id={post.id}
        user={props.store.users[post.sender_id]}
        date={post.date}
        text={post.text}
        img={post.img}
        likes={props.store.users.filter((user) => user.likedPosts.includes(post.id)).length}
        store={props.store}
      />
    ))}
  </Container>
))
export default Feed
