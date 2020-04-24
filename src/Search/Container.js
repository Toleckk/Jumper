import styled from "styled-components"

export default styled.div`
  width: 55vw;
  margin: auto;
  
  padding: 1.5rem 0;
  
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  
  @media(max-width: 768px) {
    width: 95vw;
  }
`