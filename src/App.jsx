import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Messenger from './components/Messenger'
import Friendlist from './components/Friendlist'
import Search from './components/Search'
import { BrowserRouter, Route } from 'react-router-dom'
import Messages from './components/Messages'
import state from './State'

const AppContainer = styled.div`
	width: 900px;
	margin: 0 auto 0 auto;
	display: flex;
	@media (max-width: 800px) {
		width: 800px;
	}
`

const AppHeader = styled.header`
	background-color: var(--white);
	height: 52px;
	width: 100vw;
	position: fixed;
	display: flex;
	align-items: center;
	box-shadow: var(--elevation);
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
			<BrowserRouter state={state}>
				<AppHeader />
				<AppContainer>
					<Navbar state={state} />
					<AppContent>
						<Route path="/user" component={() => <Profile state={state} />} />
						<Route path="/feed" component={() => <Feed state={state} />} />
						<Route
							path="/messenger"
							render={() => <Messenger state={state} />}
						/>
						<Route
							path={'/dialog/' + 1}
							component={() => <Messages state={state} />}
						/>
						<Route
							path="/friends"
							component={() => <Friendlist state={state} />}
						/>
						<Route path="/search" component={() => <Search state={state} />} />
					</AppContent>
				</AppContainer>
			</BrowserRouter>
		)
	}
}
