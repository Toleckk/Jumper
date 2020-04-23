import styled from "styled-components"

export default styled.ul`
  list-style: none;
  margin-left: 0;
  
  padding: 15px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > li {
    margin-top: 15px;
    margin-bottom: 15px;
    flex-shrink: 0;
    transition: all 200ms linear;
    
    &:hover {
      filter: drop-shadow(0px 0px 6px rgb(${props => props.theme.secondary}));
    }
  }
 
`