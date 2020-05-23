import styled from "styled-components"

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  flex-grow: 1;
  
  & > * {
    width: 50%;
    
    @media(max-width: 768px) {
      width: 100%;
    }
  }
  
  & > .react-datepicker-wrapper {
    display: block;
    @media(max-width: 768px) {
      width: 100%;
    }
  }
  
  & .react-datepicker__close-icon {
    transition: all 200ms linear;
  
    top: 6px;
    right: 5px;
    
    &::after {
      background-color: rgb(${props => props.theme.error});
      opacity: 0.5;
    }
    
    &:hover::after {
      opacity: 1;
    }
  }
`