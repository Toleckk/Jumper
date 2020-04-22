import styled from 'styled-components'

export default styled.button`
  display: flex;
  margin-left: 10px;
  
  transition: opacity 100ms linear;
  opacity: 0.7;
  
  &:hover {
    opacity: 1;
  }
`;