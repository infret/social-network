import React from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import BlueMenuIcon from '../resources/blue-menu-icon.svg'
import BlueMoreIcon from '../resources/blue-more-icon.svg'


const StyledHeader = styled.header`
	background-color: var(--white);
	height: 52px;
	display: flex;
	align-items: center;
	position: sticky;
`

const PageTitle = styled.h1`
	font-size: 20px;
	margin-left: 12px;
	margin-right: auto;
`

export default class PageHeader extends React.Component {
	render() {
		return (
			<StyledHeader>
				<HeaderButton icon={BlueMenuIcon}/>
				<PageTitle>{this.props.title}</PageTitle>
        <HeaderButton icon={BlueMoreIcon}/>
			</StyledHeader>
		)
	}
}
