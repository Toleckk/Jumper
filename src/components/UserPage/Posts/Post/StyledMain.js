import styled from "styled-components";

export default styled.main`
    border: 1px solid rgb(${props => props.theme.secondary});
    color: rgb(${props => props.theme.primaryText});
    font-size: large;
    min-height: 50px;
    padding: 5px;
`;