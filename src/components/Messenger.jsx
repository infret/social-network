import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Dialog from './Dialog'
import Users from '../resources/Users.json'
import Messages from '../resources/Messages.json'
import PageHeader from './PageHeader'
import Card from './Card'

const StyledMessenger = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

export default class Messenger extends React.Component {
	render() {
		return (
			<StyledMessenger>
				<PageHeader title="Messages" />
				<PageContent>
					<Searchbar />
					<Dialog
						name={Users[Messages[1].sender_id].name}
						id={Users[Messages[1].sender_id].id}
						avatar={Users[Messages[1].sender_id].avatar}
						text={Messages[1].text}
						date={Messages[1].date}
					/>
				</PageContent>
			</StyledMessenger>
		)
	}
}
