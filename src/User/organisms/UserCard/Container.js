import styled from "styled-components";
import {Flex} from "Common/atoms";

// TODO: change color
export default styled(Flex).attrs({direction: 'column'})`
    width: 55vw;
    border: 1px solid white;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    
    @media(max-width: 768px){
        width: 100vw;
    }
`;