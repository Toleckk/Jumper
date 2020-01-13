import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({align: 'center', justify: 'center'})`
    position: relative;
    align-self: center;
    cursor: pointer;
    
    @media (max-width: 768px) {
      margin-top: 5px;
    }
    
    &::after {
      content: '';
      border-bottom: 1px solid rgb(${props => props.theme.secondary});
      position: absolute;
      top: calc(100% + 2px);
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transition: 200ms all;
      box-shadow: 0 0 6px rgb(${props => props.theme.secondary});
    }
    
    &:hover::after,
    &:focus::after {
      transform: scaleX(1);
    }
`;