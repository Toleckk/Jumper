import styled from "styled-components"

export default styled.div`
  padding: 30px;
  width: 55vw;
  height: 80vh;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  
  display: flex;
  flex-direction: column;
  
  @media(max-width: 768px) {
    width: 95vw;
  }
`