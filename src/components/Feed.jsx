import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import PageHeader from './PageHeader'

const StyledFeed = styled.div``

export default class Feed extends React.Component {
	render() {
		return (
			<StyledFeed>
				<PageHeader title="News" />
				{this.props.state.users[0].posts.map(({ text, date}) => (
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
