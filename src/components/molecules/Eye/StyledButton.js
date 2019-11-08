import styled from "styled-components";

export default styled.button`
    height: 23px;
    width: 23px;
    
    margin-left: -23px;
    
    opacity: 0.5;
    
    transition: all 300ms;
    
    &:hover {
      opacity: 0.8;
  }
    
    &:active {
      filter: drop-shadow(0 0 0.2rem rgb(${props => props.theme.primary}));
      opacity: 0.9;
    }
    
    &:focus {
      filter: drop-shadow(0 0 0.2rem rgb(${props => props.theme.primary}));
      opacity: 0.7;
    }
`;