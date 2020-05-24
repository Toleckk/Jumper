import styled from "styled-components";
import {Flex} from "Common/atoms";

export default styled(Flex).attrs({as: 'main', direction: 'column', align: 'center'})`
    margin-left: auto;
    margin-right: auto;
    width: 55vw;
    
    box-sizing: border-box;
    
    padding-bottom: 2rem;
    
    @media(max-width: 768px){
        width: 100vw;
        padding-bottom: 11vh;
    }
`;