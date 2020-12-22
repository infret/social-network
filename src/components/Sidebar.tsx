import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import ProfileIcon from '../resources/profile-icon.svg'
import FeedIcon from '../resources/feed-icon.svg'
import BlueFriendsIcon from '../resources/blue-friends-icon.svg'
import MessengerIcon from '../resources/messenger-icon.svg'
import BlueSearchIcon from '../resources/blue-search-icon.svg'
import BigLogo from '../resources/big-logo.svg'

const StyledNav = styled.nav`
	width: 250px;
	position: sticky;
	top: 0;
	margin: 6px;
	height: 300px;
	background-color: var(--light-grey);
	@media (max-width: 720px) {
		display: none;
	}
`

const StyledLink = styled(NavLink)`
	display: flex;
	height: 44px;
	border-radius: 4px;
	align-items: center;
	text-decoration: none;
	color: black;

	&:hover {
		background-color: var(--darker-grey);
	}
`

const AppLogo = styled.img`
	margin: 6px 0 12px 10px;
	height: 28px;
`

const StyledImg = styled.img`
	margin: 0 10px;
	width: auto;
	height: 28px;
`

interface propsInterface {
	currentUserId : number
}

export default function Sidebar(props: propsInterface) {
	return (
			<StyledNav>
				<AppLogo src={BigLogo}/>
					<StyledLink to={'/user/' + props.currentUserId}><StyledImg src={ProfileIcon}/>Profile</StyledLink>
					<StyledLink to='/feed'><StyledImg src={FeedIcon}/>Feed</StyledLink>
					<StyledLink to='/messenger'><StyledImg src={MessengerIcon}/>Messenger</StyledLink>
					<StyledLink to='/friends'><StyledImg src={BlueFriendsIcon}/>Friends</StyledLink>
					<StyledLink to='/search'><StyledImg src={BlueSearchIcon}/>Search</StyledLink>
			</StyledNav>
	)
}