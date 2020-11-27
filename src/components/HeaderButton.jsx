import styled from 'styled-components'

export default styled.button`
	background-color: transparent;
	background-image: url(${(props) => props.icon});
	border: none;
	height: 28px;
	width: 32px;
	margin-left: 12px;
	@media (min-width: 800px) {
		display: none;
	}
`
