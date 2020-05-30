import styled from "styled-components"

export default styled.nav`
  position: fixed;
  left: 2vw;
  top: 1vh;
  
  display: flex;
  
  max-height: 100px;

  overflow: hidden;

  border: 1px solid transparent;
  border-radius: 15px;
  background: transparent;
  
  transition: 350ms all linear;
 
  @media (min-width: 768px) {
      &:hover {
        background: rgba(${props => props.theme.primaryText}, 0.1);
        border-color: rgb(${props => props.theme.primary});
        box-shadow: 0 0 10px rgb(${props => props.theme.primary});
        max-height: 100vh;
      }
      
      ${props => props.active && `
            max-height: 100vh;
            background: rgba(${props.theme.primaryText}, 0.1);
            border-color: rgb(${props.theme.primary});
            box-shadow: 0 0 10px rgb(${props.theme.primary});
      `};
  }
  
  @media(max-width: 768px) {
    background: rgb(${props => props.theme.primaryDark});
    box-shadow: 0 0 10px rgb(${props => props.theme.primary});
    border: 0;
    border-radius: 0;
    
    max-width: 100vw;
    height: min(15vw, 10vh);
    
    left: 0;
    bottom: 0;
    top: unset;
  }
`