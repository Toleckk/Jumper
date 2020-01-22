import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({direction: 'column'})`
    width: 55vw;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    
    @media(max-width: 768px){
        width: 100vw;
    }
`;