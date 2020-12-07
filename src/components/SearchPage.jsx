import React from 'react'
import Searchbar from './SearchbarTemplate'
import User from './UserTemplate'
import Card from './CardTemplate'
import PageHeader from './HeaderTemplate'
import styled from 'styled-components'

const Page = styled.div``

const PageContent = styled(Card)`
	margin-top: 6px;
`

const SearchPage = (props) => {
	return (
		<Page>
			<PageHeader title='Search people' />
			<PageContent>
				<Searchbar />
				{props.state.users.map((users) => (
					<User
						name={users.name}
						id={users.id}
						avatar={users.avatar}
						home={users.home}
					/>
				))}
			</PageContent>
		</Page>
	)
}
export default SearchPage
