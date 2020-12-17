import React from 'react'
import styled from 'styled-components'
import PageHeader from './PageHeader'
import Card from './Card'
import Avatar from './Avatar'
import TextareaForm from './TextareaForm'
import BlueSendIcon from '../resources/blue-send-icon.svg'
import {dataInterface, messageInterface} from '../store'

const PageContent = styled.div`
	margin-top: 6px;
	height: calc(100vh - 58px);
	max-height: calc(100vh - 58px);
	display: flex;
	flex-direction: column;
`

const Messages = styled(Card)`
	overflow-y: scroll;
	height: calc(100vh - 58px);
	max-height: calc(100vh - 58px);
`

const StyledMessage = styled.div`
	width: 100%;
	height: auto;
	text-decoration: none;
	color: black;
	display: grid;
	grid-template-areas: 'avatar name date' 'avatar text text';
	grid-template-columns: 74px 1fr 148px;
	grid-template-rows: 37px 1fr;
	border-bottom: 1px solid var(--grey);
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

const Date = styled.p`
	color: #999;
	font-size: 14px;
	grid-area: date;
	text-align: end;
	margin: 12px;
`

const Text = styled.pre`
	color: #333;
	grid-area: text;
	align-self: center;
`

interface propsInterface {
	data: dataInterface,
	userId: number,
	getMessages : (companion_id : number) => Array<messageInterface>
	addMessage : (messageText : string) => void
}

export default function Dialog(props: propsInterface) {
	document.title = 'Dialog'
	return (
			<div>
				<PageHeader
						title={props.data.users[props.userId].name}/>
				<PageContent>
					<Messages>
						{props.getMessages(1).map((message : messageInterface, index: number) => (
								<StyledMessage key={index}>
									<StyledAvatar src={message.avatar}/>
									<Name>{message.name}</Name>
									<Text>{message.text}</Text>
									<Date>{message.date}</Date>
								</StyledMessage>
						))}
					</Messages>
					<TextareaForm
							icon={BlueSendIcon}
							placeholder='Your message'
							onclick={props.addMessage}
					/>
				</PageContent>
			</div>
	)
}