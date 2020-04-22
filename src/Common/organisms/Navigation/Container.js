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
    background: white;
    border-color: rgb(${props => props.theme.primary});
    max-height: 100vh;
}
`