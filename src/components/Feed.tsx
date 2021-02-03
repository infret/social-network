import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import { renderInterface } from '../types'

interface propsInterface {
  getPosts: (sender_id?: number) => renderInterface[]
  addPost: (postText: string) => void
}

export default function Feed(props: propsInterface) {
  document.title = 'Home'
  return (
    <>
      <PageHeader title='Home' />
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
    </>
  )
}
