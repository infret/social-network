import React from 'react'
import styled from 'styled-components'
import BlueMenuIcon from '../resources/blue-menu-icon.svg'
import BlueMoreIcon from '../resources/blue-more-icon.svg'

const Template = styled.header`
	background-color: var(--white);
	height: 52px;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	grid-area: header;
`

const PageTitle = styled.h1`
	font-size: 20px;
	margin-left: 12px;
	margin-right: auto;
	@media (max-width: 700px) {
		margin-left: 0;
	}
`

const HeaderButton = styled.button`
	background-color: transparent;
	background-image: url(${(props) => props.icon});
	border: none;
	height: 28px;
	width: 28px;
	margin: 0 12px 0 12px;
	@media (min-width: 700px) {
		display: none;
	}
`

const HeaderTemplate = (props) => {
	return (
		<Template>
			<HeaderButton icon={BlueMenuIcon} />
			<PageTitle>{props.title}</PageTitle>
			<HeaderButton icon={BlueMoreIcon} />
		</Template>
	)
}
export default HeaderTemplate
