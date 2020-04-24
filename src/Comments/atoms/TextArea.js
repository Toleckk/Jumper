import styled from "styled-components"

export default styled.textarea`
  resize: none;
  border: 2px solid rgba(${props => props.theme.primaryText}, 0.9);
  color: rgb(${props => props.theme.primaryText});
  border-radius: 4px;
  background: transparent;
  
  width: 100%;
  
  font-size: large;
  padding: 10px 40px 10px 10px;
  box-sizing: border-box;
  
  overflow: hidden;
  
  &:focus {
    box-shadow: rgb(${props => props.theme.secondary}) 0 0 1.4rem;
    border-color: rgb(${props => props.theme.secondary});
  }
`