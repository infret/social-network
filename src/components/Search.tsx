import React from 'react'
import Searchbar from './Searchbar'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'
import { stateInterface } from '../types'
import User from './User'

const PageContent = styled(Card)`
  margin-top: 6px;
`

interface propsInterface {
  data: stateInterface
}

export default function Search(props: propsInterface) {
  document.title = 'Search people'
  return (
    <div>
      <PageHeader title='Search people' />
      <PageContent>
        <Searchbar />
        {props.data.users.map((users, index) => (
          <User
            key={index}
            name={users.username}
            id={index}
            avatar={users.avatar}
          />
        ))}
      </PageContent>
    </div>
  )
}
