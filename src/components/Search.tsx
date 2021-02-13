import React from 'react'
import Searchbar from './Searchbar'
import { IStore } from '../store'

interface propsInterface {
  store: IStore
}

export default function Search(props: propsInterface) {
  document.title = 'Search people'
  return (
    <>
      <Searchbar />
    </>
  )
}
