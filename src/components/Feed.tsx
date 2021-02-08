import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { renderInterface } from '../types'
import { observer } from 'mobx-react-lite'
import { IStore } from '../mobx-store'
import { toJS } from 'mobx'

const Container = styled.div`
  width: 100%;
  padding: 6px 12px;
`

interface propsInterface {
  getPosts: (sender_id?: number) => renderInterface[]
  addPost: (postText: string) => void
  store: IStore
}

const Feed = observer((props: propsInterface) => (
  <Container>
    <button onClick={() => props.store.createPost(2, 'ban', '1 april')}>Add post</button>
    {props.store.posts.map((post, index) => (
      <Post key={index} id={index} name={'vpech'} avatar={'a'} text={post.text} date={post.date} />
    ))}
  </Container>
))
export default Feed
