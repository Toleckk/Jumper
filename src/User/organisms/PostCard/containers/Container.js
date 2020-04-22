import styled from "styled-components";

export default styled.article`
    position: relative;

    box-sizing: border-box;    

    display: flex;
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
    
    
   &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    z-index: 5;
    
    ${props => props.pending && `
        content: '';
        background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.3), transparent); 
    `};
   }
`;