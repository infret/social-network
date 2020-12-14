import React from 'react'
import Searchbar from './Searchbar'
import User from './User'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'

const PageContent = styled(Card)`
	margin-top: 6px;
`

export default function Search(props){
	return (
		<div>
			<PageHeader title='Search people' />
			<PageContent>
				<Searchbar />
				{props.data.users.map((users, index) => (
					<User
						key={index}
						name={users.name}
						id={users.id}
						avatar={users.avatar}
						home={users.home}
					/>
				))}
			</PageContent>
		</div>
	)
}