import React from 'react'
import Searchbar from './Searchbar'
import Users from '../resources/Users.json'
import User from './User'
import Card from './Card'

export default class Search extends React.Component {
	render() {
		return (
			<Card>
				<Searchbar />
				{Users.map((Users) => (
					<User
						name={Users.name}
						id={Users.id}
						avatar={Users.avatar}
						home={Users.home}
					/>
				))}
			</Card>
		)
	}
}