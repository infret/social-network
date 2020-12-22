import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import ProfileIcon from '../resources/profile-icon.svg'
import FeedIcon from '../resources/feed-icon.svg'
import BlueFriendsIcon from '../resources/blue-friends-icon.svg'
import MessengerIcon from '../resources/messenger-icon.svg'
import BlueSearchIcon from '../resources/blue-search-icon.svg'

const StyledNav = styled.nav`
	background-color: white;
	width: 100%;
	position: fixed;
	bottom: 0;
	height: 50px;
	display: flex;
	justify-content: space-evenly;
	align-content: center;
	@media (min-width: 720px) {
		display: none;
	}
`

const StyledLink = styled(NavLink)`
	height: 50px;
	text-decoration: none;
`

const StyledImg = styled.img`
	margin: 8px;
	width: auto;
	height: 32px;
`

interface propsInterface {
	currentUserId: number
}

export default function Bottombar(props: propsInterface) {
	return (
			<StyledNav>
				<StyledLink to='/feed'><StyledImg src={FeedIcon}/></StyledLink>
				<StyledLink to='/search'><StyledImg src={BlueSearchIcon}/></StyledLink>
				<StyledLink to='/messenger'><StyledImg src={MessengerIcon}/></StyledLink>
				<StyledLink to='/friends'><StyledImg src={BlueFriendsIcon}/></StyledLink>
				<StyledLink to={'/user/' + props.currentUserId}><StyledImg src={ProfileIcon}/></StyledLink>
			</StyledNav>
	)
}