import styled from "styled-components"

export default styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-right: 10px;
  
  & button {
    opacity: 0.5;
    
    &:hover {
      opacity: 1;
    }
  }
`