import React from 'react'
import Searchbar from './SearchbarTemplate'
import User from './UserTemplate'
import Card from './CardTemplate'
import PageHeader from './HeaderTemplate'
import styled from 'styled-components'

const Page = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

const FriendsPage = (props) => {
	return (
		<Page>
			<PageHeader title='Friends' />
			<PageContent>
				<Searchbar />
				<User
					name={props.state.users[1].name}
					id={props.state.users[1].id}
					avatar={props.state.users[1].avatar}
					home={props.state.users[1].home}
				/>
			</PageContent>
		</Page>
	)
}
export default FriendsPage
