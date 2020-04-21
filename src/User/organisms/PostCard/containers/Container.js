import styled from "styled-components";

export default styled.article`
    box-sizing: border-box;

    display: flex;
    position: relative;
    flex-direction: column;
  
    padding: 10px;
    width: 100%;
    
    border-bottom: 1px solid rgba(${props => props.theme.primary}, 0.6);
    
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      background: rgb(${props => props.theme.primary});
      transform: scaleX(0);
      transition: all 200ms ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
    }
`;