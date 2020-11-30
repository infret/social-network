import React from 'react'
import Searchbar from './Searchbar'
import Users from '../resources/UsersData.json'
import User from './User'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'

const StyledFriendlist = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

export default class Friendlist extends React.Component {
	render() {
		return (
			<StyledFriendlist>
				<PageHeader title="Friends" />
				<PageContent>
					<Searchbar />
					<User
						name={Users[1].name}
						id={Users[1].id}
						avatar={Users[1].avatar}
						home={Users[1].home}
					/>
				</PageContent>
			</StyledFriendlist>
		)
	}
}
