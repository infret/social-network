import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { observer } from 'mobx-react-lite'
import { IStore, IPost } from '../store'

const Container = styled.div`
  width: 100%;
  padding: 6px 12px;
`

interface Props {
  store: IStore
}

const Feed = observer((props: Props) => {
  let posts: any[] = []
  props.store.users.map(
    (user) =>
      props.store.users[props.store.currentUserId].following.includes(user.id) &&
      user.posts.map((post) =>
        posts.push({
          id: post.id,
          user: props.store.users[user.id],
          date: post.date,
          text: post.text,
          img: post.img,
          likes: props.store.users.filter((user) => user.likedPosts.includes(post.id)).length
        })
      )
  )
  return (
    <Container>
      {posts
        .sort((a, b) => b.date - a.date)
        .map((post) => (
          <Post
            id={post.id}
            user={post.user}
            date={post.date}
            text={post.text}
            img={post.img}
            likes={post.likes}
            store={props.store}
          />
        ))}
    </Container>
  )
})
export default Feed
