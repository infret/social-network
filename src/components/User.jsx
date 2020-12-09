import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const StyledUser = styled.div`
	width: 100%;
	display: grid;
	grid-template-areas: 'avatar name' 'avatar text';
	grid-template-columns: 74px 1fr;
	grid-template-rows: 37px 37px;
	text-decoration: none;
	margin-bottom: 6px;
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

const Home = styled.p`
	grid-area: text;
	align-self: end;
	font-size: 15px;
	color: #999;
`

const User = (props) => {
	return (
		<StyledUser>
			<StyledAvatar src={props.avatar} />
			<Name>{props.name}</Name>
			<Home>{props.home}</Home>
		</StyledUser>
	)
}
export default User
