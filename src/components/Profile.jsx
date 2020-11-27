import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import Users from '../resources/Users.json'
import PageHeader from './PageHeader'
import GreyFriendsIcon from '../resources/grey-friends-icon.svg'
import GreyHomeIcon from '../resources/grey-home-icon.svg'
import GreyGiftIcon from '../resources/grey-gift-icon.svg'

const StyledProfile = styled.div`
	width: 100%;
	box-shadow: var(--elevation);
	background-color: var(--white);
	border-radius: 4px;
`

const ProfileHead = styled.div`
	display: flex;
	margin-top: 6px;
`

const StyledAvatar = styled(Avatar)`
	height: 80px;
	width: 80px;
	margin: 12px;
`

const Name = styled.p`
	font-size: 20px;
	align-self: center;
`

const Status = styled.p`
	font-size: 15px;
	align-self: center;
`

const Date = styled.p`
	color: #999;
	font-size: 15px;
	align-self: center;
`
const ProfileDetails = styled.div`
	display: flex;
	flex-direction: column;
`

const ProfileDetail = styled.div`
	height: 36px;
	display: flex;
	color: #999;
	align-items: center;
`

const DetailIcon = styled.img`
	height: 24px;
	width: 24px;
	margin-right: 12px;
`

export default class App extends React.Component {
	render() {
		return (
			<StyledProfile>
				<PageHeader title="Profile"></PageHeader>
				<ProfileHead>
					<StyledAvatar src={Users[0].avatar} />
					<Name>{Users[0].name}</Name>
					<Status>{Users[0].status}</Status>
					<Date>В сети</Date>
				</ProfileHead>
				<ProfileDetails>
					<ProfileDetail to={'/friends/' + Users[0].id}>
						<DetailIcon src={GreyFriendsIcon} />
						{Users[0].friends} друзей
					</ProfileDetail>
					<ProfileDetail>
						<DetailIcon src={GreyHomeIcon} />
						{Users[0].home}
					</ProfileDetail>
					<ProfileDetail>
						<DetailIcon src={GreyGiftIcon} />
						{Users[0].birth}
					</ProfileDetail>
				</ProfileDetails>
			</StyledProfile>
		)
	}
}
