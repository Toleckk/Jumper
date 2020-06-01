import styled from "styled-components"

export default styled.span`
  text-align: center;
  color: rgb(${props => props.theme.primaryText});
  width: 100%;
  display: block;
  
  & > svg {
    vertical-align: text-bottom;
  }
  
  & > span {
    color: inherit;
  }
`