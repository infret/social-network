import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Avatar from './Avatar'
import {NavLink} from 'react-router-dom'
import PageHeader from './PageHeader'
import Card from './Card'
import {dataInterface, renderDialogInterface} from '../store'

const PageContent = styled(Card)`
	margin-top: 6px;
`

const DialogLink = styled(NavLink)`
	height: 74px;
	width: 100%;
	text-decoration: none;
	color: black;
	display: grid;
	grid-template-areas: 'avatar name date' 'avatar text text';
	grid-template-columns: 74px 1fr 148px;
	grid-template-rows: 37px 37px;

	&:hover {
		background-color: var(--darker-grey);
	}
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

const LastMessage = styled.p`
	color: #999;
	grid-area: text;
	align-self: end;
	font-size: 15px;
`

const Date = styled.p`
	color: #999;
	grid-area: date;
	align-self: end;
	font-size: 14px;
	text-align: end;
	margin: 12px;
`

interface propsInterface {
	data: dataInterface,
	getDialogs: () => Array<renderDialogInterface>
}

export default function Messenger(props: propsInterface) {
	document.title = 'Chats'
	return (
			<div>
				<PageHeader title='Chats' />
				<PageContent>
					<Searchbar/>
					{props.getDialogs().map((dialog, i) => (
							<DialogLink key={i} to={'/dialog/' + dialog.companion_id}>
								<StyledAvatar src={dialog.avatar}/>
								<Name>{dialog.name}</Name>
								<Date>{dialog.date}</Date>
								<LastMessage>{dialog.text}</LastMessage>
							</DialogLink>
					))}
				</PageContent>
			</div>
	)
}