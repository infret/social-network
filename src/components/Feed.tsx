import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { renderInterface } from '../types'

const Container = styled.div`
  width: 100%;
  padding: 6px 12px;
`

interface propsInterface {
  getPosts: (sender_id?: number) => renderInterface[]
  addPost: (postText: string) => void
}

export default function Feed(props: propsInterface) {
  document.title = 'Posts'
  return (
    <Container>
      {props.getPosts().map((post, index) => (
        <Post
          key={index}
          id={index}
          name={post.name}
          avatar={post.avatar}
          text={post.text}
          date={post.date}
        />
      ))}
    </Container>
  )
}
