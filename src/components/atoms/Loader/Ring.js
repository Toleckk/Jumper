import styled from "styled-components";

export default styled.div`
    width: ${props => props.size}vh;
    height: ${props => props.size}vh;
    
    border: ${props => props.bold}px solid rgb(${props => props.theme.primary}); 
    border-radius: 50%;
    
    box-shadow: inset rgba(${props => props.theme.secondary}, 0.7) 0 0 2rem 0.5rem, 
                rgba(${props => props.theme.secondary}, 0.7) 0 0 2rem 0.5rem;
    opacity: 0.5;
    
    animation: 2s linear -1s infinite normal none running ${props => props.animation};
`;