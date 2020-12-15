import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Feed from './Feed'
import Profile from './Profile'
import Messenger from './Messenger'
import Friendlist from './Friendlist'
import Search from './Search'
import {BrowserRouter, Route} from 'react-router-dom'
import Dialog from './Dialog'
import {data, getPosts, getDialogs, getCurrentDate, getMessages} from '../store'

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

export default function App() {
	const [posts, setPost] = useState(data.posts)
	const [messages, setMessage] = useState(data.messages)

	function addPost(postText) {
		if (postText) {
			setPost(...posts, {
				sender_id: data.currentUserId,
				text: postText,
				date: getCurrentDate(),
			})
		}
	}

	function addMessage(messageText) {
		if (messageText) {
			setMessage(
					messages.push({
						sender_id: data.currentUserId,
						text: messageText,
						date: getCurrentDate(),
					}),
			)
		}
	}

	return (
			<BrowserRouter>
				<AppHeader/>
				<AppContainer>
					<Navbar data={data}/>
					<AppContent>
						<Route path='/user' component={() => (<Profile data={data} getPosts={getPosts}/>)}/>
						<Route path='/feed' component={() => (<Feed data={data} getPosts={getPosts} addPost={addPost}/>)}/>
						<Route path='/messenger' component={() => <Messenger data={data} getDialogs={getDialogs}/>}/>
						<Route path={'/dialog/' + 1}
									 component={() => <Dialog data={data} getMessages={getMessages} addMessage={addMessage}/>}/>
						<Route path='/friends' component={() => <Friendlist data={data}/>}/>
						<Route path='/search' component={() => <Search data={data}/>}/>
					</AppContent>
				</AppContainer>
			</BrowserRouter>
	)
}