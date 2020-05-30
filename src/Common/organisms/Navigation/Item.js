import styled from "styled-components"

export default styled.li`
    margin-top: 15px;
    margin-bottom: 15px;
    flex-shrink: 0;
    transition: all 200ms linear;
    
    height: 45px;
    
    @media (max-width: 768px) {
      height: 70%;
    }
    
    &:hover {
      filter: drop-shadow(0px 0px 6px rgb(${props => props.theme.secondary}));
    }
    
    ${props => props.active && `filter: drop-shadow(0px 0px 6px rgb(${props.theme.secondary}));`}
`