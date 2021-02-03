import React from 'react'
import Searchbar from './Searchbar'
import { stateInterface } from '../types'

interface propsInterface {
  data: stateInterface
}

export default function Search(props: propsInterface) {
  document.title = 'Search people'
  return (
    <>
      <Searchbar />
    </>
  )
}
