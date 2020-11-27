import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledPost = styled.div`
	width: 100%;
	display: grid;
	grid-template-areas: 'avatar name' 'avatar date' 'text text';
	grid-template-columns: 74px 1fr;
	grid-template-rows: 37px 37px 1fr;
	text-decoration: none;
	box-shadow: var(--elevation);
	background-color: var(--white);
	border-radius: 4px;
	margin-top: 6px;
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

const Date = styled.p`
	color: #999;
	grid-area: date;
	align-self: end;
	font-size: 14px;
`

const Text = styled.p`
	grid-area: text;
	margin: 0 12px 12px 12px;
`

export default class Post extends React.Component {
	render(name, id, avatar, date, text) {
		return (
			<StyledPost>
				<StyledAvatar src={this.props.avatar} />
				<Name>{this.props.name}</Name>
				<Text>{this.props.text}</Text>
				<Date>{this.props.date + ' ' + this.props.time}</Date>
			</StyledPost>
		)
	}
}
