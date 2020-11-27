import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledMessage = styled.div`
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

export default class Message extends React.Component {
	render(name, avatar, message, date) {
		return (
			<StyledMessage>
				<StyledAvatar src={this.props.avatar} />
				<Name>{this.props.name}</Name>
				<Text>{this.props.text}</Text>
				<Date>{this.props.date}</Date>
			</StyledMessage>
		)
	}
}
