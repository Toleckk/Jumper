import styled from "styled-components";

export default styled.span`
    font-size: x-large;
    font-weight: 700;
    line-height: 2.25;
    color: rgb(${props => props.theme.secondaryText});
    filter: drop-shadow(0px 0px 0.4rem rgba(${props => props.theme.primaryText}, 0.8));
    
    @media(max-width: 768px) {
      font-size: larger;
    }
`;