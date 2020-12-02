import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import PageHeader from './PageHeader'
import Card from './Card'
import PostInput from './PostInput'
import GreyFriendsIcon from '../resources/grey-friends-icon.svg'
import GreyHomeIcon from '../resources/grey-home-icon.svg'
import GreyGiftIcon from '../resources/grey-gift-icon.svg'

const StyledProfile = styled.div``

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

const State = styled.p`
	color: #999;
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

export default class App extends React.Component {
	render() {
		return (
			<StyledProfile>
				<PageHeader title='Profile' />
				<PageContent>
					<ProfileDescription>
						<StyledAvatar src={this.props.state.users[0].avatar} />
						<Name>{this.props.state.users[0].name}</Name>
						<Status>{this.props.state.users[0].status}</Status>
						<State>{this.props.state.users[0].state}</State>
					<ProfileDetails>
						<ProfileDetail>
							<DetailIcon src={GreyFriendsIcon} />
							{this.props.state.users[0].friends} friends
						</ProfileDetail>
						<ProfileDetail>
							<DetailIcon src={GreyHomeIcon} />
							{this.props.state.users[0].home}
						</ProfileDetail>
						<ProfileDetail>
							<DetailIcon src={GreyGiftIcon} />
							{this.props.state.users[0].birth}
						</ProfileDetail>
					</ProfileDetails>
					</ProfileDescription>
					<PostInput />
				</PageContent>
			</StyledProfile>
		)
	}
}
