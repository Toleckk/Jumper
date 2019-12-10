import styled from "styled-components";

export default styled.span`
    font-size: large;
    text-align: center;
    align-self: center;
    color: rgb(${props => props.theme.secondaryText});
`;