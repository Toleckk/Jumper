import styled, {css} from "styled-components";

export default styled.input`
    border-radius: 4px;
    padding: 7px 12px 7px 11px;
    border: 2px solid rgba(${props => props.error ? '193, 27, 27' : props.theme.primaryText}, 0.9);
    font-size: large;
    background: transparent;
    transition: all 300ms;
    color: rgb(${props => props.theme.primaryText});
    
    ${props => props.error ? `
        box-shadow: inset rgba(193, 27, 27, 0.9) 0 0 1.1rem;
    ` : ''}
    
    ${props => !props.error && css`&:focus {
        border-color: rgb(${props => props.theme.secondary});
        box-shadow: rgb(${props => props.theme.secondary}) 0 0 1.4rem;
      }`
    }
`;