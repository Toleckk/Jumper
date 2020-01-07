import styled from "styled-components";
import {Flex} from "../../Common/atoms";

export default styled(Flex)`
    @media(max-width: 768px){
        flex-direction: column;
    }
    
    background-image: url('/images/landing.jpg');
    background-position-x: -130px;
    
    min-height: 100vh;
`;