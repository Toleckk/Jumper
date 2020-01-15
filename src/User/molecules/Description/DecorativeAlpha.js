import styled from "styled-components";

export default styled.span`
    font-size: larger;
    color: rgb(${props => props.theme.secondary});
    filter: drop-shadow(0 0 1px rgb(${props => props.theme.secondary}));
`;