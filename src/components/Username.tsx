import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: bold;
`

interface propsInterface {
  userId: number
  name: string
}

const Username = (props: propsInterface) => (
  <StyledLink to={'/user/' + props.userId}>{props.name}</StyledLink>
)
export default Username
