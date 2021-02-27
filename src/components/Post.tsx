import React from 'react'
import styled from 'styled-components'
import HeartIcon from '../resources/heart.svg'
import HeartFillIcon from '../resources/heart-fill.svg'
import { IStore, IUser, timeSince } from '../store'
import User from './User'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Input from './Input'

const StyledPost = styled.div`
  margin: 10px 0;
  width: 100%;
  border: 1px solid gainsboro;
  display: flex;
  flex-wrap: wrap;
  height: 680px;
  box-sizing: border-box;
  @media (max-width: 639px) {
    height: auto;
  }
`

const PostHeader = styled.div`
  display: flex;
  align-items: center;
`

const PostBody = styled.div`
  width: 320px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 639px) {
    max-height: 280px;
    width: 100%;
  }
`

const Date = styled.p`
  color: grey;
  font-size: 13px;
  white-space: nowrap;
  margin-right: 10px;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-top: 1px solid gainsboro;
  width: 100%;
  margin-top: 4px;
`

const PostImg = styled.img`
  height: 100%;
  width: 678px;
  object-fit: cover;

  @media (max-width: 639px) {
    width: 100%;
  }
`

const Button = styled.button`
  margin: 4px 4px 0 12px;
  cursor: pointer;
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

const CommentDate = styled.p`
  color: grey;
  font-size: 12px;
  white-space: nowrap;
  margin-left: 6px;
  display: inline;
`

const Comments = styled.div`
  overflow: auto;
  max-height: 560px;
  @media (max-width: 639px) {
    max-height: 160px;
  }
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
      {props.img && <PostImg src={props.img} />}
      <PostBody>
        <div>
          <PostHeader>
            <User user={props.user} link='/social-network/user/' />
            <Date>{timeSince(props.date)}</Date>
          </PostHeader>
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
                      <CommentDate>{timeSince(comment.date)!.match(/^[0-9]*\s[a-z]/)}</CommentDate>
                    </CommentText>
                  </Comment>
                ))}
            </Comments>
          )}
        </div>
        <Actions>
          <Button onClick={() => props.store.toggleLike(props.id)}>
            {props.store.users[props.store.currentUserId].likedPosts.includes(props.id) ? (
              <img src={HeartFillIcon} alt='' />
            ) : (
              <img src={HeartIcon} alt='' />
            )}
          </Button>
          {props.likes > 0 && props.likes}
          <Input onclick={props.store.createComment} id={props.id} placeholder={'Add a comment'} />
        </Actions>
      </PostBody>
    </StyledPost>
  )
})
export default Post
