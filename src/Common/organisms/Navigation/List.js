import styled from "styled-components"

export default styled.ul`
  list-style: none;
  margin-left: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100%;  
  
  @media(max-width: 768px) {
    flex-direction: row-reverse;
    place-content: space-evenly;
    width: 100vw;
    padding: 0;
    
    & > *:last-child {
      display: none;
    }
  }
`