import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { observer } from 'mobx-react-lite'
import { IStore } from '../mobx-store'

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
        id={index}
        name={post.sender_username}
        avatar={post.sender_avatar}
        text={post.text}
        date={post.date}
      />
    ))}
  </Container>
))
export default Feed
