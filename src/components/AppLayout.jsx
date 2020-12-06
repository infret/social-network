import React from 'react'
import styled from 'styled-components'
import Navbar from './AppNavbar'
import Feed from './FeedPage'
import Profile from './ProfilePage'
import Messenger from './MessengerPage'
import Friends from './FriendsPage'
import Search from './SearchPage'
import { BrowserRouter, Route } from 'react-router-dom'
import Dialog from './DialogPage'
import stateData, { addPost, addMessage } from '../state'

const AppContainer = styled.div`
	max-width: 900px;
	width: 100vw;
	height: 100%;
	margin: 0 auto 0 auto;
	display: flex;
	@media (max-width: 800px) {
		width: 100%;
	}
`

const AppHeader = styled.header`
	background-color: var(--white);
	height: 52px;
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	box-shadow: var(--elevation);
`

const AppContent = styled.div`
	width: 100%;
`

const App = (props) => {
	return (
		<BrowserRouter>
			<AppHeader />
			<AppContainer>
				<Navbar state={stateData} />
				<AppContent>
					<Route path='/user' component={() => <Profile state={stateData} />} />
					<Route
						path='/feed'
						component={() => <Feed state={stateData} addPost={addPost} />}
					/>
					<Route
						path='/messenger'
						render={() => (
							<Messenger state={stateData} addMessage={addMessage} />
						)}
					/>
					<Route
						path={'/dialog/' + 1}
						component={() => (
							<Dialog state={stateData} addMessage={addMessage} />
						)}
					/>
					<Route
						path='/friends'
						component={() => <Friends state={stateData} />}
					/>
					<Route
						path='/search'
						component={() => <Search state={stateData} />}
					/>
				</AppContent>
			</AppContainer>
		</BrowserRouter>
	)
}

export default App
