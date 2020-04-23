import styled from "styled-components"

export default styled.nav`
  position: fixed;
  left: 2vw;
  top: 1vh;
  max-height: 100px;

  overflow: hidden;

  border: 1px solid transparent;
  border-radius: 15px;
  background: transparent;
  
  transition: 350ms all linear;
 
  &:hover {
    background: rgba(${props => props.theme.primaryText}, 0.1);
    border-color: rgb(${props => props.theme.primary});
    box-shadow: 0 0 10px rgb(${props => props.theme.primary});
    max-height: 100vh;
}
`