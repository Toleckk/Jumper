import styled from "styled-components";

export default styled.span`
    margin-top: 5px;
    word-break: break-word;
    color: rgb(${props => props.theme.secondaryText});
`;