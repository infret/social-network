import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)<{ size: string | null }>`
  color: black;
  text-decoration: none;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  margin: 12px;
`

const StyledImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

interface propsInterface {
  userId: number
  src: string
  size: string | null
}

const Avatar = (props: propsInterface) => (
  <StyledLink
    to={'/user/' + props.userId}
    size={props.size ? props.size : '50px'}
  >
    <StyledImg src={props.src} />
  </StyledLink>
)
export default Avatar
