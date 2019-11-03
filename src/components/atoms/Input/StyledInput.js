import styled from "styled-components";

export default styled.input`
    border-radius: 4px;
    padding: 7px 12px 7px 11px;
    border: 2px solid rgba(${({error, theme}) => error ? theme.error : theme.primaryText}, 0.9);
    font-size: large;
    background: transparent;
    transition: all 300ms;
    color: rgb(${props => props.theme.primaryText});
    
    ${({error, theme}) => error ? `
        box-shadow: inset rgba(${theme.error} 0.9) 0 0 1.1rem;
    ` : ''}
    
    ${({error, theme}) => !error && `&:focus {
        border-color: rgb(${theme.secondary});
        box-shadow: rgb(${theme.secondary}) 0 0 1.4rem;
      }`
    }
`;