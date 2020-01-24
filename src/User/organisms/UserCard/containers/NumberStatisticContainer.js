import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({as: 'span', align: 'center'})`
    font-size: 27px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    
    @media (max-width: 768px){
      font-size: 18px;
    }
    
    
    & > svg {
      margin-left: 6px;
    }
    
    &:hover {
      filter: drop-shadow(0 0 4px rgb(${props => props.theme.primary}));
    }
    
    &::after {
      content: '';
      border-bottom: 1px solid rgb(${props => props.theme.secondary});
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transition: 200ms all;
      box-shadow: 0 0 6px rgb(${props => props.theme.secondary});
    }
    
    &:hover::after,
    &:focus::after{
      transform: scaleX(1);
    }
`;