import styled from "styled-components";

export default styled.hr`
    width: 100%;
    height: 1px;
    background: rgb(${props => props.theme.primary});
    margin: 1.5em 0;
    box-shadow: rgb(${props => props.theme.primary}) 0 0 1rem 0.05rem;
`;