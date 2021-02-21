import React from 'react'
import Searchbar from './Searchbar'
import { IStore } from '../store'
import User from './User'
import Post from './Post'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6px;
  position: relative;
`

const Overlay = styled.div`
  position: fixed;
  top: 100px;
  width: 300px;
  margin: 0 auto;
  max-height: 500px;
  overflow-x: auto;
  background-color: white;
  border: 1px solid gainsboro;
  border-radius: 4px;
`

interface Props {
  store: IStore
}

const Explore = observer((props: Props) => {
  document.title = 'Search and explore'
  return (
    <Page>
      <Searchbar store={props.store} />
      {props.store.searchBy && (
        <Overlay>
          {props.store.users
            .filter((user) => user.username.includes(props.store.searchBy))
            .map((user) => (
              <User user={user} link='/social-network/user/' />
            ))}
        </Overlay>
      )}
      {props.store.users.map((user) =>
        user.posts.map((post) => (
          <Post
            id={post.id}
            user={props.store.users[user.id]}
            date={post.date}
            text={post.text}
            img={post.img}
            likes={props.store.users.filter((user) => user.likedPosts.includes(post.id)).length}
            store={props.store}
          />
        ))
      )}
    </Page>
  )
})
export default Explore
