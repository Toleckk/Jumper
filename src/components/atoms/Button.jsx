import styled from "styled-components";

export default styled.button`
    align-self: center;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1.5px solid rgb(${props => props.theme.primary});
    background: transparent;
    color: rgb(${props => props.theme.secondaryText});
    cursor: pointer;
    font-size: medium;
    user-select: none;
    text-decoration: none;
    
    transition: all 100ms;
    
    &:hover {
        border-color: rgb(${props => props.theme.primary});
        box-shadow: rgba(${props => props.theme.primary}, 0.6) 0 0 1.5rem;
        background: radial-gradient(transparent, rgba(${props => props.theme.secondary}, 0.35));
    }
    
    &:focus {
        outline: none;
    }
`;