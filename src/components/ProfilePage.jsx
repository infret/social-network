import React from 'react'
import styled from 'styled-components'
import Avatar from './AvatarTemplate'
import PageHeader from './HeaderTemplate'
import Card from './CardTemplate'
import TextareaForm from './TextareaTemplate'
import GreyFriendsIcon from '../resources/grey-friends-icon.svg'
import GreyHomeIcon from '../resources/grey-home-icon.svg'
import GreyGiftIcon from '../resources/grey-gift-icon.svg'
import BlueNextIcon from '../resources/blue-next-icon.svg'

const Page = styled.div``

const PageContent = styled.div`
	margin-top: 6px;
`

const ProfileDescription = styled(Card)`
	display: grid;
	grid-template-areas: 'avatar name' 'avatar status' 'avatar state' 'details details';
	grid-template-columns: 102px 1fr;
	grid-template-rows: 34px 34px 34px 1fr;
	margin-top: 6px;
`

const StyledAvatar = styled(Avatar)`
	height: 78px;
	width: 78px;
	margin: 12px;
`

const Name = styled.p`
	font-size: 20px;
	align-self: start;
`

const Status = styled.p`
	font-size: 15px;
	align-self: start;
	grid-area: status;
`

const OnlineStatus = styled.p`
	color: var(--dark-grey);
	font-size: 15px;
	align-self: end;
	grid-area: state;
`
const ProfileDetails = styled.div`
	grid-area: details;
	display: flex;
	flex-direction: column;
`

const ProfileDetail = styled.div`
	height: 36px;
	display: flex;
	color: var(--dark-grey);
	align-items: center;
	margin-bottom: 2px;
	font-size: 15px;
`

const DetailIcon = styled.img`
	height: 24px;
	width: 24px;
	margin: 8px;
`

const ProfilePage = (props) => {
	return (
		<Page>
			<PageHeader title='Profile' />
			<PageContent>
				<ProfileDescription>
					<StyledAvatar src={props.state.users[0].avatar} />
					<Name>{props.state.users[0].name}</Name>
					<Status>{props.state.users[0].status}</Status>
					<OnlineStatus>{props.state.users[0].state}</OnlineStatus>
					<ProfileDetails>
						<ProfileDetail>
							<DetailIcon src={GreyFriendsIcon} />
							{props.state.users[0].friends} friends
						</ProfileDetail>
						<ProfileDetail>
							<DetailIcon src={GreyHomeIcon} />
							{props.state.users[0].home}
						</ProfileDetail>
						<ProfileDetail>
							<DetailIcon src={GreyGiftIcon} />
							{props.state.users[0].birth}
						</ProfileDetail>
					</ProfileDetails>
				</ProfileDescription>
				<TextareaForm
					icon={BlueNextIcon}
					placeholder="What's new?"
					action={'ADD_POST'}
					dispatch={props.dispatch}
				/>
			</PageContent>
		</Page>
	)
}
export default ProfilePage
