import styled from "styled-components"

export default styled.button`
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
  
  border-radius: calc(${props => props.height} * 0.5);
  border: 1px solid rgb(${props => props.checked ? props.theme.secondary : props.theme.primaryText});
  box-shadow: 0 0 8px rgb(${props => props.checked ? props.theme.secondary : props.theme.primaryText});
`