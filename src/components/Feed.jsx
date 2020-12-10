import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import TextareaForm from './TextareaForm'
import BlueNextIcon from '../resources/blue-next-icon.svg'

const StyledFeed = styled.div``

const PageContent = styled.div`
	overflow-y: scroll;
	height: calc(100vh - 58px);
	max-height: calc(100vh - 58px);
`

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
			<PageContent>
				<TextareaForm
					icon={BlueNextIcon}
					placeholder="What's new?"
					onclick={props.addPost}
				/>
				{posts}
			</PageContent>
		</StyledFeed>
	)
}
export default Feed
