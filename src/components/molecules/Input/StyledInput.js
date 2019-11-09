import styled from "styled-components";

export default styled.input`
    flex: 1;
    background: transparent;
    color: rgb(${props => props.theme.primaryText});
    font-size: large;
    min-width: 77px;
`;