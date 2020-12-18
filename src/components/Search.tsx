import React from 'react'
import Searchbar from './Searchbar'
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

export default function Search(props : propsInterface){
	document.title = 'Search people'
	return (
		<div>
			<PageHeader title='Search people' />
			<PageContent>
				<Searchbar />
				{/*{props.data.users.map((users, index) => (*/}
				{/*	<User*/}
				{/*		key={index}*/}
				{/*		name={users.name}*/}
				{/*		id={index}*/}
				{/*		avatar={users.avatar}*/}
				{/*		home={users.home}*/}
				{/*	/>*/}
				{/*))}*/}
				TODO
			</PageContent>
		</div>
	)
}