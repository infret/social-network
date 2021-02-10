import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Username from './Username'
import HeartIcon from '../resources/heart.svg'
import MessageIcon from '../resources/message.svg'

const StyledPost = styled.div`
  margin: 12px auto;
  border: 1px solid gainsboro;
  border-radius: 4px;
  min-width: 360px;
  width: 100%;
  max-width: 700px;
`

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`

const Date = styled.p`
  color: #999;
  font-size: 14px;
  margin-left: 12px;
`

const ImgActions = styled.div`
  display: flex;
  align-items: center;
`

const ImgButton = styled.button`
  margin: 12px -4px 0 4px;
`

const PostImg = styled.img`
  height: 100%;
  max-height: 700px;
  width: 100%;
  object-fit: cover;
`

const Text = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 6px 12px 12px 12px;
`

interface propsInterface {
  name: string
  avatar: string
  text: string
  date: string
  id: number
}

export default function Post(props: propsInterface) {
  return (
    <StyledPost>
      <PostHeader>
        <Avatar src={props.avatar} userId={props.id} />
        <Username userId={props.id} name={props.name} />
        <Date>{props.date}</Date>
      </PostHeader>
      <PostImg src='https://images.unsplash.com/photo-1612367197703-1e9839b09f63?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
      <ImgActions>
        <ImgButton>
          <img src={HeartIcon} alt='' />
        </ImgButton>
        <ImgButton>
          <img src={MessageIcon} alt='' />
        </ImgButton>
      </ImgActions>
      <Text>{props.text}</Text>
    </StyledPost>
  )
}
