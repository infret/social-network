import React from 'react'
import styled from 'styled-components'
import HeartIcon from '../resources/heart.svg'
import HeartFillIcon from '../resources/heart-fill.svg'
import MessageIcon from '../resources/message.svg'
import { IStore, IUser, timeSince } from '../store'
import User from './User'
import { NavLink } from 'react-router-dom'
import TextareaForm from './TextareaForm'
import { observer } from 'mobx-react-lite'

const StyledPost = styled.div`
  margin: 8px auto;
  border: 1px solid gainsboro;
  border-radius: 4px;
  width: 100%;
  max-width: 640px;
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
  width: 100%;
  max-height: 640px;
  max-width: 640px;
  object-fit: cover;
  margin-bottom: 2px;
`

const ImgAction = styled.button`
  margin: 8px 6px 8px 12px;
  cursor: pointer;
`

const Comments = styled.div`
  margin-bottom: 6px;
`

const Comment = styled.div`
  padding: 6px 12px;
`

const Username = styled(NavLink)`
  font-size: 14px;
  font-weight: bold;
  margin-right: 6px;
`

const CommentText = styled.p`
  font-size: 14px;
  word-break: break-word;
  white-space: pre-wrap;
`

interface Props {
  store: IStore
  id: number
  user: IUser
  date: number
  img: string
  likes: number
}

const Post = observer((props: Props) => {
  let comments: any[] = []
  props.store.users.map((user) =>
    user.comments
      .filter((comment) => comment.post_id === props.id)
      .sort((a, b) => b.date - a.date)
      .map((comment) => comments.push({ user: user, text: comment.text, date: comment.date }))
  )
  return (
    <StyledPost>
      <PostHeader>
        <User user={props.user} link='/social-network/user/' />
        <Date>{timeSince(props.date)}</Date>
      </PostHeader>
      {props.img && <PostImg src={props.img} />}
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
      {comments && (
        <Comments>
          {comments
            .sort((a, b) => a.date - b.date)
            .map((comment) => (
              <Comment>
                <CommentText>
                  <Username to={'/social-network/user/' + comment.user.id}>
                    {comment.user.username}
                  </Username>
                  {comment.text}
                </CommentText>
              </Comment>
            ))}
        </Comments>
      )}
      <TextareaForm
        onclick={props.store.createComment}
        id={props.id}
        placeholder={'Add a comment'}
      />
    </StyledPost>
  )
})
export default Post
