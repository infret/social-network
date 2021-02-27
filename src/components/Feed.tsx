import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import { observer } from 'mobx-react-lite'
import { IStore, IPost } from '../store'
import { NavLink } from 'react-router-dom'

const Page = styled.div`
  width: 100%;
  padding: 5px 0;
`

const Placeholder = styled.h1`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
`

const StyledLink = styled(NavLink)`
  color: dodgerblue;
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
          img: post.img,
          likes: props.store.users.filter((user) => user.likedPosts.includes(post.id)).length
        })
      )
  )
  return (
    <Page>
      {props.store.users[props.store.currentUserId].following.length ? (
        posts
          .sort((a, b) => b.date - a.date)
          .map((post) => (
            <Post
              id={post.id}
              user={post.user}
              date={post.date}
              img={post.img}
              likes={post.likes}
              store={props.store}
            />
          ))
      ) : (
        <Placeholder>
          You don't follow anyone yet, consider
          <StyledLink to='/social-network/explore'>
            {' '}
            searching for posts and people to follow
          </StyledLink>
        </Placeholder>
      )}
    </Page>
  )
})
export default Feed
