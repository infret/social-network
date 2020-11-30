import React from 'react'
import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Messenger from './components/Messenger'
import Friendlist from './components/Friendlist'
import Search from './components/Search'
import { BrowserRouter, Route } from 'react-router-dom'
import MessagesPage from './components/Messages'

const StyledDiv = styled.div`
	width: 900px;
	margin: 0 auto 0 auto;
	display: flex;
	@media (max-width: 800px) {
		width: 800px;
	}
`

const AppContent = styled.div`
	width: 650px;
	@media (max-width: 800px) {
		
	}
	@media (max-width: 800px) {
		width: 500px;
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
						<Route path={"/dialog/" + 1} component={MessagesPage} />
						<Route path="/friends" component={Friendlist} />
						<Route path="/search" component={Search} />
					</AppContent>
				</StyledDiv>
			</BrowserRouter>
		)
	}
}
