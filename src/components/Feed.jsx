import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'
import TextareaForm from './TextareaForm'
import BlueNextIcon from '../resources/blue-next-icon.svg'
import {useState} from 'react'

const PageContent = styled.div`
	overflow-y: scroll;
	height: calc(100vh - 58px);
	max-height: calc(100vh - 58px);
`

export default function Feed(props) {
	const [posts, setPost] = useState(props.data.posts)

	function addPost(postText) {
		if (postText) {
			setPost(
					posts.push({
						sender_id: props.data.currentUserId,
						text: postText,
						date: props.getCurrentDate(),
					})
			)
		}
	}

	return (
			<div>
				<PageHeader title='News'/>
				<PageContent>
					<TextareaForm
							icon={BlueNextIcon}
							placeholder="What's new?"
							onclick={addPost}
					/>
					{props.getPosts().map((post, index) => (
							<Post
									key={index}
									name={post.name}
									avatar={post.avatar}
									text={post.text}
									date={post.date}
							/>
					))}
				</PageContent>
			</div>
	)
}