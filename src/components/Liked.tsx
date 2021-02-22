import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { observer } from 'mobx-react-lite'
import { IStore, IPost } from '../store'

const Page = styled.div`
  width: 100%;
  padding: 6px 12px;
`

const Heading = styled.h1`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`

interface Props {
  store: IStore
}

const Liked = observer((props: Props) => (
  <Page>
    {props.store.users[props.store.currentUserId].likedPosts.length ? (
      props.store.users.map((user) =>
        user.posts.map(
          (post) =>
            props.store.users[props.store.currentUserId].likedPosts.includes(post.id) && (
              <Post
                id={post.id}
                user={user}
                date={post.date}
                img={post.img}
                likes={props.store.users.filter((user) => user.likedPosts.includes(post.id)).length}
                store={props.store}
              />
            )
        )
      )
    ) : (
      <Heading>You haven't liked any posts yet</Heading>
    )}
  </Page>
))
export default Liked
