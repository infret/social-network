import React from 'react'
import styled from 'styled-components'
import UsersData from '../resources/UsersData.json'
import MessagesData from '../resources/MessagesData.json'
import PageHeader from './PageHeader'
import Avatar from './Avatar'
import Card from './Card'

const StyledMessages = styled.div`
	min-height: 100%;
`

const PageContent = styled(Card)`
	margin-top: 6px;
`

const Message = styled.div`
	min-height: 72px;
	display: grid;
	grid-template-areas: 'avatar name date' 'avatar message message';
	grid-template-columns: 72px 1fr 144px;
	grid-template-rows: 15px 1fr;
	grid-gap: 5px;
	grid-row-gap: 6px;
`

const StyledAvatar = styled(Avatar)`
	height: 50px;
	width: 50px;
	margin: 12px;
	grid-area: avatar;
`

const Name = styled.p`
	grid-area: name;
`

const Text = styled.p`
	color: #999;
	grid-area: message;
`

const Date = styled.p`
	color: #999;
	grid-area: date;
	text-align: end;
	margin: 12px;
	font-size: 14px;
`

export default class Messages extends React.Component {
	render() {
		return (
			<StyledMessages>
				<PageHeader title={UsersData[MessagesData[0].recipient_id].name} />
				<PageContent>
					{MessagesData.map(() => (
						<Message>
							<StyledAvatar src={UsersData[MessagesData.sender_id].avatar} />
							<Name>{UsersData[MessagesData.sender_id].name}</Name>
							<Text>{MessagesData.text}</Text>
							<Date>{MessagesData.date}</Date>
						</Message>
						// <Message
						// 	name={UsersData[MessagesData.sender_id].name}
						// 	id={MessagesData.id}
						// 	avatar={UsersData[MessagesData.sender_id].avatar}
						// 	text={MessagesData.text}
						// 	date={MessagesData.date}
						// 	time={MessagesData.time}
						// />
					))}
				</PageContent>
			</StyledMessages>
		)
	}
}
