import React from 'react'
import styled from 'styled-components'
import AppNavbar from './AppNavbar'
import FeedPage from './FeedPage'
import ProfilePage from './ProfilePage'
import MessengerPage from './MessengerPage'
import FriendsPage from './FriendsPage'
import SearchPage from './SearchPage'
import { BrowserRouter, Route } from 'react-router-dom'
import DialogPage from './DialogPage'

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
	background-color: white;
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
				<AppNavbar state={props.store._state} />
				<AppContent>
					<Route
						path='/user'
						component={() => <ProfilePage state={props.store._state} />}
					/>
					<Route
						path='/feed'
						component={() => (
							<FeedPage
								state={props.store._state}
								addPost={props.store.addPost}
							/>
						)}
					/>
					<Route
						path='/messenger'
						render={() => <MessengerPage state={props.store._state} />}
					/>
					<Route
						path={'/dialog/' + 1}
						component={() => (
							<DialogPage
								state={props.store._state}
								addMessage={props.store.addMessage}
							/>
						)}
					/>
					<Route
						path='/friends'
						component={() => <FriendsPage state={props.store._state} />}
					/>
					<Route
						path='/search'
						component={() => <SearchPage state={props.store._state} />}
					/>
				</AppContent>
			</AppContainer>
		</BrowserRouter>
	)
}

export default App
