import React from 'react'
import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Messenger from './components/Messenger'
import Search from './components/Search'
import { BrowserRouter, Route } from 'react-router-dom'

const StyledDiv = styled.div`
	width: 900px;
	margin: 0 auto 0 auto;
	display: flex;
	@media (max-width: 800px) {
		width: 100vw;
	}
`

const AppContent = styled.div`
	width: 650px;
	@media (max-width: 800px) {
		width: 100vw;
	}
`

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<AppHeader />
				<StyledDiv>
					<Navbar />
					<AppContent>
						<Route path="/user" component={Profile} />
						<Route path="/feed" component={Feed} />
						<Route path="/messenger" component={Messenger} />
						<Route path="/search" component={Search} />
					</AppContent>
				</StyledDiv>
			</BrowserRouter>
		)
	}
}
