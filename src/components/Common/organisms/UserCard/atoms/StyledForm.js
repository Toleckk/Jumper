import styled from "styled-components";

export default styled.form`
    width: 23vw;
    background: transparent;
    border: 2px solid rgb(${props => props.theme.primary});
    padding: 10px;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;