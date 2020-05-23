import styled from "styled-components";
import {Flex} from "../../Common/atoms";

export default styled(Flex)`
    @media(max-width: 768px){
        flex-direction: column;
    }
    
    background-image: url(${props => props.theme.landingBackground});
    background-position-x: -130px;
    
    min-height: 100vh;
`;