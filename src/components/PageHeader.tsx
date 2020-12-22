import React from 'react'
import styled from 'styled-components'
import BlueMoreIcon from '../resources/blue-more-icon.svg'

const StyledHeader = styled.header`
	background-color: var(--white);
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	padding: 0 12px;
`

const PageTitle = styled.h1`
	font-size: 20px;
	@media (max-width: 700px) {
		margin-left: 0;
	}
`

const HeaderButton = styled.button<{icon: string;}>`
	background-color: transparent;
	background-image: url(${(props) => props.icon});
	border: none;
	height: 28px;
	width: 28px;
	@media (min-width: 700px) {
		display: none;
	}
`

interface propsInterface {
	title: string,
}

export default function PageHeader(props : propsInterface){
	return (
		<StyledHeader>
			<PageTitle>{props.title}</PageTitle>
			<HeaderButton icon={BlueMoreIcon} />
		</StyledHeader>
	)
}
