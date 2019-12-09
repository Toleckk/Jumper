import styled from "styled-components";
import Type from "prop-types";

const StyledInput = styled.input`
    font-size: ${props => props.large ? 'large' : 'inherit'};
    ${props => props.centered && 'text-align: center;'}
    background: transparent;
    color: rgb(${props => props.large ? props.theme.secondaryText : props.theme.primaryText});
    border: 0;
    border-bottom: 1px solid rgb(${props => props.theme.primary});
    min-width: 5px;
`;

StyledInput.defaultProps = {
    large: false,
    centered: false,
};

StyledInput.propTypes = {
    large: Type.bool,
    centered: Type.bool,
};

export default StyledInput;