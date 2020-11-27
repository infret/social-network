import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'

const StyledDialog = styled(NavLink)`
	height: 74px;
	width: 100%;
	text-decoration: none;
	color: black;
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
`

const LastMessage = styled.p`
	color: #999;
	grid-area: message;
`

const Date = styled.p`
	color: #999;
	grid-area: date;
	text-align: end;
	font-size: 14px;
`

export default class Dialog extends React.Component {
	render() {
		return (
			<StyledDialog to={'/dialog/' + this.props.id}>
				<StyledAvatar src={this.props.avatar} />
				<Name>{this.props.name}</Name>
				<LastMessage>{this.props.text}</LastMessage>
				<Date>{this.props.date}</Date>
			</StyledDialog>
		)
	}
}
