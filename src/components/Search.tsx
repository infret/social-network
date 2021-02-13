import React from 'react'
import Searchbar from './Searchbar'
import { IStore } from '../store'
import User from './User'

interface propsInterface {
  store: IStore
}

export default function Search(props: propsInterface) {
  document.title = 'Search people'
  return (
    <>
      <Searchbar />
      {props.store.users.map((user) => (
        <User user={user} link='/user/' />
      ))}
    </>
  )
}
