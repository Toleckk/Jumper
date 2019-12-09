import styled from "styled-components";

export default styled.header`
    font-size: large;
    color: rgb(${props => props.theme.secondaryText});
    
    border-bottom: 1px solid transparent;
`;