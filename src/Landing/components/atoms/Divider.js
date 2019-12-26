import styled from "styled-components";

export default styled.hr`
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    background: rgb(${props => props.theme.primary});
    margin: 3vh 0;
    box-shadow: rgb(${props => props.theme.primary}) 0 0 1rem 0.05rem;
`;