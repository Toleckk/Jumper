import styled from "styled-components";
import Flex from "../../../atoms/Flex";

export default styled(Flex).attrs({as: 'aside', direction: 'column', align: 'start'})`
    flex: 1;

    padding-top: 11%;
    
    @media (min-device-aspect-ratio: 16/9) {
        padding-top: 5%;
    }
`;