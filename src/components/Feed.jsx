import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import TextareaForm from './TextareaForm'
import BlueNextIcon from '../resources/blue-next-icon.svg'

const StyledFeed = styled.div``

export default class Feed extends React.Component {
	render() {
		return (
			<StyledFeed>
				<PageHeader title='News' />
				<TextareaForm
					icon={BlueNextIcon}
					placeholder="What's new?"
					onclick={this.props.addPost}
				/>
				{this.props.state.users[0].posts.map(({ text, date }) => (
					<Post
						name={this.props.state.users[0].name}
						id={this.props.state.users[0].posts.id}
						avatar={this.props.state.users[0].avatar}
						text={text}
						date={date}
					/>
				))}
			</StyledFeed>
		)
	}
}
