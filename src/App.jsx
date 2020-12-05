import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Messenger from './components/Messenger'
import Friendlist from './components/Friendlist'
import Search from './components/Search'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Dialog from './components/Dialog'
import stateData, { addPost, addMessage } from './state'

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
				<BrowserRouter>
					<AppHeader />
					<AppContainer>
						<Navbar state={stateData} />
						<AppContent>
							{/* <Redirect from='/' to='/feed' exact/> */}
							<Route path='/user' component={() => <Profile state={stateData} />} />
							<Route path='/feed' component={() => <Feed state={stateData} addPost={addPost}/>} />
							<Route
								path='/messenger'
								render={() => <Messenger state={stateData} addMessage={addMessage} />}
							/>
							<Route
								path={'/dialog/' + 1}
								component={() => <Dialog state={stateData} addMessage={addMessage}/>}
							/>
							<Route
								path='/friends'
								component={() => <Friendlist state={stateData} />}
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
}
