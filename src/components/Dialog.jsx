import React from 'react'
import styled from 'styled-components'
import PageHeader from './PageHeader'
import Card from './Card'
import Avatar from './Avatar'
import TextareaForm from './TextareaForm'
import BlueSendIcon from '../resources/blue-send-icon.svg'

const StyledDialog = styled.div`
	height: 100%;
`

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

const Dialog = (props) => {
	return (
		<StyledDialog>
			<PageHeader title={props.data.users[window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)].name} />
			<PageContent>
				<Messages>
					{props.data.messages.map((message) => (
						<StyledMessage>
							<StyledAvatar
								src={props.data.users[message.sender_id].avatar}
							/>
							<Name>
								{props.data.users[message.sender_id].name}
							</Name>
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
		</StyledDialog>
	)
}

export default Dialog
