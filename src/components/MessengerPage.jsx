import React from 'react'
import styled from 'styled-components'
import Searchbar from './SearchbarTemplate'
import Avatar from './AvatarTemplate'
import { NavLink } from 'react-router-dom'
import PageHeader from './HeaderTemplate'
import Card from './CardTemplate'

const Page = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

const DialogLink = styled(NavLink)`
	height: 74px;
	width: 100%;
	text-decoration: none;
	color: black;
	display: grid;
	grid-template-areas: 'avatar name date' 'avatar text text';
	grid-template-columns: 74px 1fr 148px;
	grid-template-rows: 37px 37px;
	&:hover {
		background-color: var(--darker-grey);
	}
`

const StyledAvatar = styled(Avatar)`
	height: 50px;
	width: 50px;
	margin: 12px;
	grid-area: avatar;
`

const Name = styled.p`
	grid-area: name;
	align-self: start;
`

const LastMessage = styled.p`
	color: var(--dark-grey);
	grid-area: text;
	align-self: end;
	font-size: 15px;
`

const Date = styled.p`
	color: var(--dark-grey);
	grid-area: date;
	align-self: end;
	font-size: 14px;
	text-align: end;
	margin: 12px;
`

const MessengerPage = (props) => {
	return (
		<Page>
			<PageHeader title='Chats' />
			<PageContent>
				<Searchbar />
				<DialogLink
					to={
						'/dialog/' + props.state.users[props.state.messages[1].sender_id].id
					}
				>
					<StyledAvatar
						src={props.state.users[props.state.messages[1].sender_id].avatar}
					/>
					<Name>
						{props.state.users[props.state.messages[1].sender_id].name}
					</Name>
					<Date>{props.state.messages[1].date}</Date>
					<LastMessage>
						{props.state.messages[props.state.messages.length - 1].text}
					</LastMessage>
				</DialogLink>
			</PageContent>
		</Page>
	)
}
export default MessengerPage
