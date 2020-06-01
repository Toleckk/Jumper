import styled from "styled-components"

export default styled.nav`
  position: fixed;
  left: 2vw;
  top: 1vh;
  
  display: flex;
  
  max-height: 65px;
  padding: 15px;

  overflow: hidden;

  border: 1px solid transparent;
  border-radius: 15px;
  
  transition: 300ms all linear;
  
  background-color: rgb(${props => props.theme.primaryDark});
  
 
  @media (min-width: 768px) {
      &:hover {
        border-color: rgb(${props => props.theme.primary});
        box-shadow: 0 0 10px rgb(${props => props.theme.primary});
        max-height: 100vh;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(${props => props.theme.primaryText}, 0.1);
          pointer-events: none;
        }
      }
      
      ${props => props.active && `
        border-color: rgb(${props.theme.primary});
        box-shadow: 0 0 10px rgb(${props.theme.primary});
        max-height: 100vh;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(${props.theme.primaryText}, 0.1);
          pointer-events: none;
        }
      `};
  }
  
  @media(max-width: 768px) {
    box-shadow: 0 0 10px rgb(${props => props.theme.primary});
    border: 0;
    border-radius: 0;
    
    max-width: 100vw;
    height: 15vw;
    
    padding: 0 0 0.1rem;
    
    left: 0;
    bottom: 0;
    top: unset;
  }
`
