import styled from "styled-components";
import Type from "prop-types";

const StyledFieldset = styled.fieldset`
    border-radius: 4px;
    padding: 0 8px 7px 11px;
    border: 2px solid rgba(${({error, theme}) => error ? theme.error : theme.primaryText}, 0.9);
    transition: all 300ms;
    color: rgb(${props => props.theme.primaryText});
    
    ${({focused, theme, error}) => focused && !error && `
        box-shadow: rgb(${theme.secondary}) 0 0 1.4rem;
        border-color: rgb(${theme.secondary});
    `}
    
    ${({error, theme}) => error ? `
        box-shadow: inset rgba(${theme.error}, 0.9) 0 0 1.1rem;
    ` : ''}
`;

StyledFieldset.propTypes = {
    focused: Type.bool
};

export default StyledFieldset;