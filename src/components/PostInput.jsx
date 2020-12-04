import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { AddPostContext } from '../State';

const StyledPostInput = styled(Card)`
	margin-top: 6px;
	min-height: 34px;
	height: auto;
	display: flex;
	align-items: center;
	padding: 12px;
`

const StyledInput = styled.textarea`
	background-color: var(--grey);
	width: 100%;
	font-size: 14px;
	border: none;
	border-radius: 4px;
	height: 34px;
  padding: 6px 12px;
  font-size: 15px;

	&:hover {
		background-color: var(--darker-grey);
	}
`

export default class PostInput extends React.Component {
	static contextType = AddPostContext;
	
	render() {
		const { addPost } = this.context;

		return (
			<StyledPostInput>
				<StyledInput type='text' placeholder="What's new?" />
				<button type="button" onClick={() => addPost('AYE!')}></button>
			</StyledPostInput>
		)
	}
}
