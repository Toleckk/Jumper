import styled from "styled-components"

export default styled.button`
  height: 35px;
  
  opacity: 0.7;
  
  transition: opacity 100ms ease;
  
  &:hover {
    opacity: 1;
  }
  
  & > svg {
    width: auto;
  }
`;