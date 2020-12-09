import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import TextareaForm from './TextareaForm'
import BlueNextIcon from '../resources/blue-next-icon.svg'

const StyledFeed = styled.div``

const Feed = (props) => {
	const posts = []
	for (let i = 0; i < props.data.posts.length; i++) {
		console.log(i)
		posts.push(
			<Post
				name={props.data.users[props.data.posts[i].sender_id].name}
				avatar={props.data.users[props.data.posts[i].sender_id].avatar}
				text={props.data.posts[i].text}
				date={props.data.posts[i].date}
			/>
		)
	}
	return (
		<StyledFeed>
			<PageHeader title='News' />
			<TextareaForm
				icon={BlueNextIcon}
				placeholder="What's new?"
				onclick={props.addPost}
			/>
			{posts}
		</StyledFeed>
	)
}
export default Feed
