import styled from "styled-components"

export default styled.button`
  position: absolute;
  width: 30px;
  top: 9px;
  right: 9px;
  
  opacity: 0.7;
  
  ${props => props.focused && 'opacity: 1;'}
`