import styled from "styled-components";
import Type from "prop-types";

const StyledFieldset = styled.fieldset`
    text-align: left;
    color: rgb(${props => props.theme.primaryText});
    
    box-sizing: border-box;
    position: relative;
    
    width: 100%;    
    min-width: 215px;
    
    padding: 0 8px 7px 11px;
    
    border-radius: 4px;
    border: 2px solid rgba(${({error, theme}) => error ? theme.error : theme.primaryText}, 0.9);
    
    transition: all 300ms;
    
    ${({focused, theme, error}) => focused && !error && `
        box-shadow: rgb(${theme.secondary}) 0 0 1.4rem;
        border-color: rgb(${theme.secondary});
    `}
    
    ${({error, theme}) => error ? `
        box-shadow: inset rgba(${theme.error}, 0.9) 0 0 1.1rem;
    ` : ''}
    
    &::before {
      position: absolute;
      content: '${props => typeof props.error === 'string' && props.error}';
      top: calc(100% + 3px);
      padding-left: 2px;
      font-size: small;
      color: rgb(${props => props.theme.errorText});
      border-left: 4px solid rgb(${props => props.theme.secondary});
    }
`;

StyledFieldset.defaultProps = {
    error: false,
};

StyledFieldset.propTypes = {
    focused: Type.bool,
    error: Type.oneOfType([Type.bool, Type.string]),
};

export default StyledFieldset;