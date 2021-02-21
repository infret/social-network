import React from 'react'
import Searchbar from './Searchbar'
import { IStore } from '../store'
import User from './User'

interface propsInterface {
  store: IStore
}

export default function Explore(props: propsInterface) {
  document.title = 'Search and explore'
  return (
    <>
      <Searchbar />
      {props.store.users.map((user) => (
        <User user={user} link='/user/' />
      ))}
    </>
  )
}
