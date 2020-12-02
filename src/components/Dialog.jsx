import React from 'react'
import styled from 'styled-components'
import PageHeader from './PageHeader'
import Card from './Card'

const StyledMessages = styled.div``

const PageContent = styled(Card)`
margin-top: 6px;`

const Message = styled.div`
	min-height: 72px;
	padding: 8px;
`

const Text = styled.p`
	color: #000;
`

const Date = styled.p`
	color: #999;
	font-size: 14px;
`

export default class Messages extends React.Component {
	render() {
		return (
			<StyledMessages>
				<PageHeader title={this.props.state.users[1].name} />
				<PageContent>
					{this.props.state.messages.map(({ text, date }) => (
						<Message>
							<Text>{text}</Text>
							<Date>{date}</Date>
						</Message>
					))}
				</PageContent>
			</StyledMessages>
		)
	}
}
