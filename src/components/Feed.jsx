import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import TextareaForm from './TextareaForm'
import BlueNextIcon from '../resources/blue-next-icon.svg'

const StyledFeed = styled.div``

const Feed = (props) => {
	return (
		<StyledFeed>
			<PageHeader title='News' />
			<TextareaForm
				icon={BlueNextIcon}
				placeholder="What's new?"
				onclick={props.addPost}
			/>
			{props.state.users[0].posts.map(({ text, date }) => (
				<Post
					name={props.state.users[0].name}
					id={props.state.users[0].posts.id}
					avatar={props.state.users[0].avatar}
					text={text}
					date={date}
				/>
			))}
		</StyledFeed>
	)
}
export default Feed
