import React from 'react'
import { IStore } from '../store'
import User from './User'
import Post from './Post'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'
import CloseIcon from '../resources/close.svg'

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6px;
  position: relative;
`

const Searchbar = styled.div`
  width: 300px;
  height: 36px;
  margin: 8px auto;
  border: 1px solid gainsboro;
  border-radius: 4px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: calc(100% - 30px);
  height: 100%;
  font-size: 15px;
  margin-left: 10px;
`

const Button = styled.button`
  background-image: url(${CloseIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 22px;
  width: 22px;
  justify-self: end;
  margin-right: 10px;
`

const Overlay = styled.div`
  width: 300px;
  margin: 0 auto;
  max-height: 500px;
  overflow-x: auto;
  background-color: white;
  border: 1px solid gainsboro;
  position: absolute;
  top: 50px;
`

const Posts = styled.div`
  width: 100%;
`

interface Props {
  store: IStore
}

const Explore = observer((props: Props) => {
  document.title = 'Search and explore'
  return (
    <Page>
      <Searchbar>
        <Input
          type='search'
          placeholder='Search'
          value={props.store.searchBy}
          onChange={(e) => props.store.setSearch(e.target.value.toLowerCase())}
        />
        {props.store.searchBy && <Button onClick={() => props.store.setSearch('')}></Button>}
      </Searchbar>
      {props.store.searchBy && (
        <Overlay>
          {props.store.users
            .filter((user) => user.username.includes(props.store.searchBy))
            .map((user) => (
              <User user={user} link='/social-network/user/' />
            ))}
        </Overlay>
      )}
      <Posts>
        {props.store.users.map((user) =>
          user.posts.map((post) => (
            <Post
              id={post.id}
              user={props.store.users[user.id]}
              date={post.date}
              img={post.img}
              likes={props.store.users.filter((user) => user.likedPosts.includes(post.id)).length}
              store={props.store}
            />
          ))
        )}
      </Posts>
    </Page>
  )
})
export default Explore
