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
	return (
		<StyledFeed>
			<PageHeader title='News' />
			<PageContent>
				<TextareaForm
					icon={BlueNextIcon}
					placeholder="What's new?"
					onclick={props.addPost}
				/>
				{props.getPosts().map((post) => (
					<Post
						name={post.name}
						avatar={post.avatar}
						text={post.text}
						date={post.date}
					/>
				))}
			</PageContent>
		</StyledFeed>
	)
}
export default Feed
