import styled from "styled-components";

export default styled.fieldset`
    border-radius: 4px;
    padding: 0 8px 7px 11px;
    border: 2px solid rgba(${({error, theme}) => error ? theme.error : theme.primaryText}, 0.9);
    transition: all 300ms;
    color: rgb(${props => props.theme.primaryText});
    
    ${({focused, theme}) => focused && `
        box-shadow: rgb(${theme.secondary}) 0 0 1.4rem;
        border-color: rgb(${theme.secondary});
    `}
`;