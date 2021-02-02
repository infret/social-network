import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import TextareaForm from './TextareaForm'
import { renderInterface } from '../types'

const PageContent = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 58px);
  max-height: calc(100vh - 58px);
`

interface propsInterface {
  getPosts: (sender_id?: number) => renderInterface[]
  addPost: (postText: string) => void
}

export default function Feed(props: propsInterface) {
  document.title = 'News'
  return (
    <div>
      <PageHeader title='News' />
      <PageContent>
        {/* <TextareaForm placeholder="What's new?" onclick={props.addPost} /> */}
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
      </PageContent>
    </div>
  )
}
