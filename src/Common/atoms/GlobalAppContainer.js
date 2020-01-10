import styled from "styled-components";

export default styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background: rgb(${props => props.theme.primaryDark});
    color: rgb(${props => props.theme.primaryText});
`;