import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ProfileIcon from '../resources/profile-icon.svg'
import FeedIcon from '../resources/feed-icon.svg'
import BlueFriendsIcon from '../resources/blue-friends-icon.svg'
import MessengerIcon from '../resources/messenger-icon.svg'
import BlueSearchIcon from '../resources/blue-search-icon.svg'
import Users from '../resources/Users.json'

const StyledNavbar = styled.nav`
	width: 238px;
	position: sticky;
	margin: 58px 6px;
	background-color: var(--light-grey);
	@media (max-width: 800px) {
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

const StyledImg = styled.img`
	margin: 8px;
	width: 28px;
	height: 28px;
`

export default class Navbar extends React.Component {
	render() {
		return (
			<StyledNavbar>
				<StyledLink to={'/user/' + Users[0].id}>
					<StyledImg src={ProfileIcon} />
					{Users[0].name}
				</StyledLink>
				<StyledLink to="/feed">
					<StyledImg src={FeedIcon} />
					Feed
				</StyledLink>
				<StyledLink to="/messenger">
					<StyledImg src={MessengerIcon} />
					Messenger
				</StyledLink>
				<StyledLink to="/friends">
					<StyledImg src={BlueFriendsIcon} />
					Friends
				</StyledLink>
				<StyledLink to="/search">
					<StyledImg src={BlueSearchIcon} />
					Search
				</StyledLink>
			</StyledNavbar>
		)
	}
}
