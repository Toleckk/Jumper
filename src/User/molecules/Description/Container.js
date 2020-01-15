import styled from "styled-components";

export default styled.span`
    font-size: large;
    color: rgb(${props => props.theme.secondaryText});
    margin-bottom: 0.5em;
    
    @media(max-width: 768px) {
      font-size: small;
    }
`;