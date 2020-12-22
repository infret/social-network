import React, {useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Profile from "./Profile";
import Messenger from "./Messenger";
import Friendlist from "./Friendlist";
import Search from "./Search";
import {BrowserRouter, Route} from "react-router-dom";
import Dialog from "./Dialog";
import {
	data,
	getCurrentDate, renderInterface, renderDialogInterface,
} from "../store";
import Bottombar from './Bottombar'

const AppContainer = styled.div`
	max-width: 900px;
	width: 100vw;
	margin: 0 auto 0 auto;
	display: flex;
	@media (max-width: 800px) {
		width: 100%;
	}
`;

const AppHeader = styled.header`
	background-color: var(--white);
	height: 52px;
	width: 100%;
	position: fixed;
	box-shadow: var(--elevation);
`;

const AppContent = styled.div`
	width: 100%;
`;

export default function App() {
	const [posts, setPost] = useState(data.posts);
	const [messages, setMessage] = useState(data.messages);

	function addPost(postText: string) {
		if (postText) {
			setPost((prev) => [...prev, {
				sender_id: data.currentUserId,
				text: postText,
				date: getCurrentDate(),
			}]);
		}
	}

	function addMessage(messageText: string) {
		if (messageText) {
			setMessage((prev) => [...prev, {
				sender_id: data.currentUserId,
				recipient_id: 1,
				text: messageText,
				date: getCurrentDate(),
			}]);
		}
	}

	function getPosts(sender_id: number = -1) {
		let postsToRender: Array<renderInterface> = []
		posts.forEach((item, i) => {
			if (sender_id === -1) {
				postsToRender.push({
					name: data.users[posts[i].sender_id].name,
					avatar: data.users[posts[i].sender_id].avatar,
					text: posts[i].text,
					date: posts[i].date,
				})
			} else {
				if (posts[i].sender_id === sender_id) {
					postsToRender.push({
						name: data.users[sender_id].name,
						avatar: data.users[sender_id].avatar,
						text: posts[i].text,
						date: posts[i].date,
					})
				}
			}
		})
		return postsToRender
	}

	function getMessages(companion_id: number) {
		let messagesToRender: Array<renderInterface> = []
		messages.forEach((item, i) => {
			if ((messages[i].sender_id === companion_id && messages[i].recipient_id === data.currentUserId) || (messages[i].sender_id === data.currentUserId && messages[i].recipient_id === companion_id)) {
				messagesToRender.push({
					name: data.users[messages[i].sender_id].name,
					avatar: data.users[messages[i].sender_id].avatar,
					text: messages[i].text,
					date: messages[i].date,
				})
			}
		})
		return messagesToRender
	}

	function getDialogs() {
		let dialogsToRender: Array<renderDialogInterface> = []
		messages.forEach((item, i) => {
			if (messages[i].recipient_id === data.currentUserId) {
				dialogsToRender.push({
					companion_id: messages[i].sender_id,
					name: data.users[messages[i].sender_id].name,
					avatar: data.users[messages[i].sender_id].avatar,
					text: messages[i].text,
					date: messages[i].date,
				})
			}
		})
		return dialogsToRender
	}

	return (
			<BrowserRouter>
				<AppHeader/>
				<AppContainer>
					<Sidebar currentUserId={data.currentUserId}/>
					<AppContent>
						<Route path='/user/' component={() =>
								<Profile data={data} userId={parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))} getPosts={getPosts}/>}/>
						<Route path='/feed' component={() => (<Feed getPosts={getPosts} addPost={addPost}/>)}/>
						<Route path='/messenger' component={() => <Messenger data={data} getDialogs={getDialogs}/>}/>
						<Route path='/dialog/' component={() => (
								<Dialog data={data} userId={parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1))} getMessages={getMessages} addMessage={addMessage}/>)}/>
						<Route path='/friends' component={() => <Friendlist data={data}/>}/>
						<Route path='/search' component={() => <Search data={data}/>}/>
					</AppContent>
					<Bottombar currentUserId={data.currentUserId}/>
				</AppContainer>
			</BrowserRouter>
	);
}
