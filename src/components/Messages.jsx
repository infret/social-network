import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import UsersData from '../resources/UsersData.json'
import MessagesData from '../resources/MessagesData.json'
import PageHeader from './PageHeader'
import Card from './Card'

const StyledMessages = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

export default class Messages extends React.Component {
	render() {
		return (
			<StyledMessages>
				<PageHeader title={UsersData[MessagesData[0].recipient_id].name} />
				<PageContent>
					{MessagesData.map((MessagesData) => (
						<Message
							name={UsersData[MessagesData.sender_id].name}
							id={MessagesData.id}
							avatar={UsersData[MessagesData.sender_id].avatar}
							text={MessagesData.text}
							date={MessagesData.date}
							time={MessagesData.time}
						/>
					))}
				</PageContent>
			</StyledMessages>
		)
	}
}
