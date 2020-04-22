import styled from "styled-components"

export default styled.ul`
  list-style: none;
  margin-left: 0;
  
  padding: 15px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > li {
    margin-top: 10px;
    margin-bottom: 10px;
    flex-shrink: 0;
  }
`