import React from 'react'
import Searchbar from './Searchbar'
import Users from '../resources/Users.json'
import User from './User'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'

const StyledSearch = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

export default class Search extends React.Component {
	render() {
		return (
			<StyledSearch>
				<PageHeader title="Search people"/>
				<PageContent>
				<Searchbar />
				{Users.map((Users) => (
					<User
						name={Users.name}
						id={Users.id}
						avatar={Users.avatar}
						home={Users.home}
					/>
				))}
				</PageContent>
			</StyledSearch>
		)
	}
}
