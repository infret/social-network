import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
	color: black;
	text-decoration: none;
	height: 52px;
	width: 52px;
	margin: 12px;
`

const StyledImg = styled.img`
	border-radius: 50%;
	width: 100%;
	height: 100%;
`

interface propsInterface {
	userId: number,
	src: string
}

const Avatar = (props: propsInterface) => (<StyledLink to={'/user/' + props.userId}><StyledImg src={props.src}/></StyledLink>)
export default Avatar