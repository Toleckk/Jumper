import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({direction: 'column', justify: 'space-evenly'})`
    width: 200px;
    padding: 5px;

    position: absolute;
    right: 0;
    top: 0;
    
    @media (max-width: 768px) {
      position: static;
      align-self: flex-end;
      padding: 0;
      margin-top: 10px;
    }
`;