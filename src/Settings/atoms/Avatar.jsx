import styled from "styled-components"

export default styled.img`
  width: 150px;
  height: 150px;
  
  border-radius: 50%;
  
  border: 2px solid rgb(${props => props.theme.primary});
  box-shadow: 0 0 25px rgb(${props => props.theme.primary});
`