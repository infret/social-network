import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import Users from '../resources/Users.json'
import Posts from '../resources/Posts.json'
import PageHeader from './PageHeader'

const StyledFeed = styled.div``

export default class Feed extends React.Component {
	render() {
		return (
			<StyledFeed>
				<PageHeader title="News" />
				{Posts.map((Posts) => (
					<Post
						name={Users[Posts.sender_id].name}
						id={Posts.id}
						avatar={Users[Posts.sender_id].avatar}
						text={Posts.text}
						date={Posts.date}
						time={Posts.time}
					/>
				))}
			</StyledFeed>
		)
	}
}
