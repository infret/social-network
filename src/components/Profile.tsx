import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import PageHeader from './PageHeader'
import Card from './Card'
import Post from './Post'
import GreyFriendsIcon from '../resources/grey-friends-icon.svg'
import GreyHomeIcon from '../resources/grey-home-icon.svg'
import GreyGiftIcon from '../resources/grey-gift-icon.svg'
import {dataInterface, renderInterface} from '../store'

const PageContent = styled.div`
	margin-top: 6px;
`

const ProfileDescription = styled(Card)`
	display: grid;
	grid-template-areas: 'avatar name' 'avatar status' 'details details';
	grid-template-columns: 102px 1fr;
	grid-template-rows: 51px 51px 1fr;
	margin-top: 6px;
`

const StyledAvatar = styled.img`
	height: 78px;
	width: 78px;
	border-radius: 50%;
	margin: 12px;
`

const Name = styled.p`
	font-size: 20px;
	align-self: start;
`

const Status = styled.p`
	color: #999;
	font-size: 15px;
	grid-area: status;
`
const ProfileDetails = styled.div`
	grid-area: details;
	display: flex;
	flex-direction: column;
`

const ProfileDetail = styled.div`
	height: 36px;
	display: flex;
	color: #999;
	align-items: center;
	margin-bottom: 2px;
	font-size: 15px;
`

const DetailIcon = styled.img`
	height: 24px;
	width: 24px;
	margin: 8px;
`

interface propsInterface {
	data: dataInterface,
	userId: number,
	getPosts : (sender_id? : number) => Array<renderInterface>
}

export default function Profile(props : propsInterface){
	document.title = props.data.users[props.userId].name
	return (
		<div>
			<PageHeader title='Profile' />
			<PageContent>
				<ProfileDescription>
					<StyledAvatar
						src={props.data.users[props.userId].avatar}
					/>
					<Name>{props.data.users[props.userId].name}</Name>
					<Status>{props.data.users[props.userId].online}</Status>
					<ProfileDetails>
						<ProfileDetail>
							<DetailIcon src={GreyFriendsIcon} />
							{props.data.users[props.userId].friends} friends
						</ProfileDetail>
						<ProfileDetail>
							<DetailIcon src={GreyHomeIcon} />
							{props.data.users[props.userId].home}
						</ProfileDetail>
						<ProfileDetail>
							<DetailIcon src={GreyGiftIcon} />
							{props.data.users[props.userId].birth}
						</ProfileDetail>
					</ProfileDetails>
				</ProfileDescription>
				{props.getPosts(props.userId).map((post, index) => (
						<Post
								id={index}
								key={index}
								name={post.name}
								avatar={post.avatar}
								text={post.text}
								date={post.date}
						/>
				))}

			</PageContent>
		</div>
	)
}