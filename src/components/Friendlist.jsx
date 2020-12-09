import React from 'react'
import Searchbar from './Searchbar'
import User from './User'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'

const StyledFriendlist = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

const Friendlist = (props) => {
	return (
		<StyledFriendlist>
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
		</StyledFriendlist>
	)
}
export default Friendlist
