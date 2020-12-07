import React from 'react'
import styled from 'styled-components'
import Post from './PostTemplate'
import PageHeader from './HeaderTemplate'
import TextareaForm from './TextareaTemplate'
import BlueNextIcon from '../resources/blue-next-icon.svg'

const Page = styled.div``

const FeedPage = (props) => {
	return (
		<Page>
			<PageHeader title='News' />
			<TextareaForm
				icon={BlueNextIcon}
				placeholder="What's new?"
				onclick={props.addPost}
			/>
			{props.state.posts.map(({ sender_id, text, date }) => (
				<Post
					name={props.state.users[sender_id].name}
					avatar={props.state.users[sender_id].avatar}
					text={text}
					date={date}
				/>
			))}
		</Page>
	)
}
export default FeedPage
