import styled from "styled-components"

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  transition: flex 300ms linear;
  
  ${props => props.focused && 'flex-grow: 1;'}
`