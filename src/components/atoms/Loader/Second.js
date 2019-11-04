import styled, {keyframes} from "styled-components";
import Ring from "./Ring";

const animation = keyframes`
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    }
`;

export default styled(Ring).attrs({animation})`
    margin-left: calc(-${props => props.size}vh - ${props => 2 * props.bold}px);
`;