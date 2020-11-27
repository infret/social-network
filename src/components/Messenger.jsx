import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Dialog from './Dialog'
import Users from '../resources/Users.json'
import PageHeader from './PageHeader'

const StyledMessenger = styled.div`
	box-shadow: var(--elevation);
	background-color: var(--white);
	border-radius: 4px;
`

export default class Messenger extends React.Component {
	render() {
		return (
			<StyledMessenger>
				<PageHeader title='Messages'/>
				<Searchbar />

				<Dialog
					name={Users[0].name}
					id={Users[0].id}
					avatar={Users[0].avatar}
					text="Вы: А он слепой!"
					date="12 ноя"
				/>
			</StyledMessenger>
		)
	}
}
