import styled, {keyframes} from "styled-components";
import {Flex} from "Common/atoms";

const animation = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export default styled(Flex).attrs({align: 'center', justify: 'space-between'})`
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: rgb(${props => props.theme.primaryDark});
    
    animation: ${animation} ease 200ms;
`;