import React from 'react'
import styled from 'styled-components'
import PageHeader from './HeaderTemplate'
import Card from './CardTemplate'
import Avatar from './AvatarTemplate'
import TextareaForm from './TextareaTemplate'
import BlueSendIcon from '../resources/blue-send-icon.svg'

const Page = styled.div``

const PageContent = styled.div`
	margin-top: 6px;
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

const DialogPage = (props) => {
	return (
		<Page>
			<PageHeader title={props.state.users[1].name} />
			<PageContent>
				<Card>
					{props.state.messages.map(({ text, date }) => (
						<StyledMessage>
							<StyledAvatar
								src={
									props.state.users[props.state.messages[1].sender_id].avatar
								}
							/>
							<Name>
								{props.state.users[props.state.messages[1].sender_id].name}
							</Name>
							<Text>{text}</Text>
							<Date>{date}</Date>
						</StyledMessage>
					))}
				</Card>
				<TextareaForm
					icon={BlueSendIcon}
					placeholder='Your message'
					onclick={props.addMessage}
				/>
			</PageContent>
		</Page>
	)
}
export default DialogPage
