import styled from "styled-components";

export default styled.time`
    font-size: smaller;
    color: rgba(${props => props.theme.primaryText}, 0.9);
    -webkit-backface-visibility: hidden;
    transform: translateZ(0);
`;