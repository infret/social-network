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
	min-height: 100vh;
`

const App = (props) => {
	return (
		<BrowserRouter>
			<AppHeader />
			<AppContainer>
				<AppNavbar state={props.state} />
				<AppContent>
					<Route
						path={'/user' + props.state.users[0].id}
						component={() => <ProfilePage state={props.state} dispatch={props.dispatch}/>}
					/>
					<Route
						path='/feed'
						component={() => (
							<FeedPage
								state={props.state}
								dispatch={props.dispatch}
							/>
						)}
					/>
					<Route
						path='/messenger'
						render={() => <MessengerPage state={props.state} />}
					/>
					<Route
						path={'/dialog/' + 1}
						component={() => (
							<DialogPage
								state={props.state}
								dispatch={props.dispatch}
							/>
						)}
					/>
					<Route
						path='/friends'
						component={() => <FriendsPage state={props.state} />}
					/>
					<Route
						path='/search'
						component={() => <SearchPage state={props.state} />}
					/>
				</AppContent>
			</AppContainer>
		</BrowserRouter>
	)
}

export default App
