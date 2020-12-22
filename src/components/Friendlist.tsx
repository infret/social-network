import React from 'react'
import Searchbar from './Searchbar'
import User from './User'
import Card from './Card'
import PageHeader from './PageHeader'
import styled from 'styled-components'
import {dataInterface} from '../store'

const PageContent = styled(Card)`
	margin-top: 6px;
`

interface propsInterface {
	data: dataInterface,
}

export default function Friendlist(props: propsInterface){
	document.title = 'Friends'
	return (
		<div>
			<PageHeader title='Friends' />
			<PageContent>
				<Searchbar />
				<User
					name={props.data.users[1].name}
					id={1}
					avatar={props.data.users[1].avatar}
					home={props.data.users[1].home}
				/>
			</PageContent>
		</div>
	)
}