import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Avatar from './Avatar'
import { NavLink } from 'react-router-dom'
import PageHeader from './PageHeader'
import Card from './Card'

const StyledMessenger = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

const StyledDialog = styled(NavLink)`
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
	color: #999;
	grid-area: text;
	align-self: end;
	font-size: 15px;
`

const Date = styled.p`
	color: #999;
	grid-area: date;
	align-self: end;
	font-size: 14px;
	text-align: end;
	margin: 12px;
`

export default class Messenger extends React.Component {
	render() {
		return (
			<StyledMessenger>
				<PageHeader title="Messages" />
				<PageContent>
					<Searchbar />
					<StyledDialog to={'/dialog/' + this.props.state.users[this.props.state.messages[1].sender_id].id}>
						<StyledAvatar src={this.props.state.users[this.props.state.messages[1].sender_id].avatar} />
						<Name>{this.props.state.users[this.props.state.messages[1].sender_id].name}</Name>
						<Date>{this.props.state.messages[1].date}</Date>
						<LastMessage>{this.props.state.messages[this.props.state.messages.length - 1].text}</LastMessage>
					</StyledDialog>
				</PageContent>
			</StyledMessenger>
		)
	}
}
