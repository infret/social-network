import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  height: 40px;
  width: 40px;
  margin: 10px;
`

const StyledImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

interface propsInterface {
  userId: number
  src: string
}

const Avatar = (props: propsInterface) => (
  <StyledLink to={'/user/' + props.userId}>
    <StyledImg src={props.src} />
  </StyledLink>
)
export default Avatar
