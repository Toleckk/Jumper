import styled from "styled-components"

export default styled.label`
  position: absolute;
  right: 15px;
  top: 0;
  height: 100%;
  width: 50px;
  
  transition: all 300ms linear;
  
  ${props => props.focused && 'opacity: 0.7;'}
`