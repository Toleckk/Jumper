import styled from "styled-components";

export default styled.input`
    margin-top: 15px;
    
    border-radius: 4px;
    padding: 10px 12px;
    border: 2px solid rgba(${props => props.theme.primaryText}, 0.9);
    font-size: medium;
    background: transparent;
    transition: all 300ms;
    color: rgb(${props => props.theme.primaryText});
    
    ${props => props.error ? `
        border-color: rgba(193, 27, 27, 0.9) !important;
        box-shadow: inset rgba(193, 27, 27, 0.9) 0 0 1.1rem !important;
    ` : ''}
    
    &:focus {
        outline: none;
        border-color: rgb(${props => props.theme.secondary});
        box-shadow: rgb(${props => props.theme.secondary}) 0 0 1.4rem;
    }
`;