import React from 'react'
import Searchbar from './Searchbar'
import User from './User'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'

const PageContent = styled(Card)`
	margin-top: 6px;
`

export default function Friendlist(props){
	return (
		<div>
			<PageHeader title='Friends' />
			<PageContent>
				<Searchbar />
				<User
					name={props.data.users[1].name}
					id={props.data.users[1].id}
					avatar={props.data.users[1].avatar}
					home={props.data.users[1].home}
				/>
			</PageContent>
		</div>
	)
}