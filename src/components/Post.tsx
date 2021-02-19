import React from 'react'
import styled from 'styled-components'
import HeartIcon from '../resources/heart.svg'
import HeartFillIcon from '../resources/heart-fill.svg'
import MessageIcon from '../resources/message.svg'
import { IStore, IUser } from '../store'
import User from './User'

const StyledPost = styled.div`
  margin: 8px auto;
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
  white-space: nowrap;
  margin: 12px;
`

const ImgActions = styled.div`
  display: flex;
  align-items: center;
`

const PostImg = styled.img`
  height: 100%;
  max-height: 700px;
  min-height: 0;
  width: 100%;
  object-fit: cover;
  margin-bottom: 2px;
`

const Text = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  margin: 6px 12px 8px 12px;
`

const ImgAction = styled.button`
  margin: 8px 6px 8px 12px;
`

interface propsInterface {
  store: IStore
  id: number
  user: IUser
  date: string
  text: string
  img: string
  likes: number
}

export default function Post(props: propsInterface) {
  return (
    <StyledPost>
      <PostHeader>
        <User user={props.user} link='/user/' />
        <Date>{props.date}</Date>
      </PostHeader>
      {props.img && <PostImg src={props.img} />}
      {props.text && <Text>{props.text}</Text>}
      <ImgActions>
        <ImgAction onClick={() => props.store.toggleLike(props.id)}>
          {props.store.users[props.store.currentUserId].likedPosts.includes(props.id) ? (
            <img src={HeartFillIcon} alt='' />
          ) : (
            <img src={HeartIcon} alt='' />
          )}
        </ImgAction>
        {props.likes > 0 && props.likes}
        <ImgAction>
          <img src={MessageIcon} alt='' />
        </ImgAction>
      </ImgActions>
    </StyledPost>
  )
}
