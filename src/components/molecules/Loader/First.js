import {keyframes} from "styled-components";
import Ring from "./Ring";
import React from "react";

const animation = keyframes`
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    }
`;

export default props => <Ring animation={animation} {...props}/>;