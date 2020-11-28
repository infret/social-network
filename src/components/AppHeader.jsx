import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import FullLogo from '../resources/big-logo.svg'

const StyledHeader = styled.header`
	background-color: var(--white);
	height: 52px;
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: var(--elevation);
`

const StyledLink = styled(NavLink)`
	margin-left: 14px;
	height: 28px;
	width: 886px;
	@media (max-width: 800px) {
		display: none;
	}
`

const StyledImg = styled.img`
	height: 28px;
`

export default class Header extends React.Component {
	render() {
		return (
			<StyledHeader>
				<StyledLink to="/feed">
					<StyledImg src={FullLogo} alt="Vreacte" />
				</StyledLink>
			</StyledHeader>
		)
	}
}