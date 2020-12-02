import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ProfileIcon from '../resources/profile-icon.svg'
import FeedIcon from '../resources/feed-icon.svg'
import BlueFriendsIcon from '../resources/blue-friends-icon.svg'
import MessengerIcon from '../resources/messenger-icon.svg'
import BlueSearchIcon from '../resources/blue-search-icon.svg'
import BigLogo from '../resources/big-logo.svg'

const StyledNavbar = styled.nav`
	width: 238px;
	position: sticky;
	margin: 6px;
	background-color: var(--light-grey);
	@media (max-width: 700px) {
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
	margin: 0 8px 0 8px;
	width: auto;
	height: 28px;
`

const AppLogo = styled.img`
	margin: 5px 8px 7px 6px;
	height: 30px;
`

const Navlinks = styled.div`
	margin-top: 6px;
`

export default class Navbar extends React.Component {
	render() {
		return (
			<StyledNavbar>
				<AppLogo src={BigLogo} />
				<Navlinks>
					<StyledLink to={'/user/' + this.props.state.users[0].id}>
						<StyledImg src={ProfileIcon} />
						{this.props.state.users[0].name}
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
				</Navlinks>
			</StyledNavbar>
		)
	}
}
