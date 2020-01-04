import styled, {keyframes} from "styled-components";

const appear = keyframes`
  from {
    transform: scaleX(0);
  }
  
  to {
    transform: scaleX(1);    
  }
`;

export default styled.hr`
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    background: rgb(${props => props.theme.primary});
    margin: 3vh 0;
    box-shadow: rgb(${props => props.theme.primary}) 0 0 1rem 0.05rem;
    
    animation: ${appear} 880ms ease normal;
`;