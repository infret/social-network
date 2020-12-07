import React from 'react'
import styled from 'styled-components'
import Avatar from './AvatarTemplate'
import Card from './CardTemplate'

const Template = styled(Card)`
	display: grid;
	grid-template-areas: 'avatar name' 'avatar date' 'text text';
	grid-template-columns: 74px 1fr;
	grid-template-rows: 37px 37px 1fr;
	text-decoration: none;
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
	color: var(--dark-grey);
	grid-area: date;
	align-self: end;
	font-size: 14px;
`

const Text = styled.pre`
	grid-area: text;
	margin: 0 12px 12px 12px;
`

const PostTemplate = (props) => {
	return (
		<Template>
			<StyledAvatar src={props.avatar} />
			<Name>{props.name}</Name>
			<Text>{props.text}</Text>
			<Date>{props.date}</Date>
		</Template>
	)
}
export default PostTemplate
