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

export default class Friendlist extends React.Component {
	render() {
		return (
			<StyledFriendlist>
				<PageHeader title="Friends" />
				<PageContent>
					<Searchbar />
					<User
						name={this.props.state.users[1].name}
						id={this.props.state.users[1].id}
						avatar={this.props.state.users[1].avatar}
						home={this.props.state.users[1].home}
					/>
				</PageContent>
			</StyledFriendlist>
		)
	}
}
