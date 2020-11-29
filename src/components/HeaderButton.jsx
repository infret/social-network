import styled from 'styled-components'

export default styled.button`
	background-color: transparent;
	background-image: url(${(props) => props.icon});
	border: none;
	height: 28px;
	width: 28px;
	margin: 0 12px 0 12px;
	@media (min-width: 700px) {
		display: none;
	}
`
