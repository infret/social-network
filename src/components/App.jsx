import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Feed from './Feed'
import Profile from './Profile'
import Messenger from './Messenger'
import Friendlist from './Friendlist'
import Search from './Search'
import { BrowserRouter, Route } from 'react-router-dom'
import Dialog from './Dialog'
import data, { addPost, addMessage, getPosts, getDialogs } from '../store'

const AppContainer = styled.div`
	max-width: 900px;
	width: 100vw;
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
	box-shadow: var(--elevation);
`

const AppContent = styled.div`
	width: 100%;
`

const App = () => {
	return (
		<BrowserRouter>
			<AppHeader />
			<AppContainer>
				<Navbar data={data} />
				<AppContent>
					<Route
						path='/user'
						component={() => (
							<Profile data={data} addPost={addPost} getPosts={getPosts} />
						)}
					/>
					<Route
						path='/feed'
						component={() => (
							<Feed data={data} addPost={addPost} getPosts={getPosts} />
						)}
					/>
					<Route
						path='/messenger'
						render={() => <Messenger data={data} getDialogs={getDialogs} />}
					/>
					<Route
						path={'/dialog/' + 1}
						component={() => <Dialog data={data} addMessage={addMessage} />}
					/>
					<Route path='/friends' component={() => <Friendlist data={data} />} />
					<Route path='/search' component={() => <Search data={data} />} />
				</AppContent>
			</AppContainer>
		</BrowserRouter>
	)
}
export default App
