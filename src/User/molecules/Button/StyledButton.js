import styled from "styled-components";
import Type from "prop-types";

const sizes = {
    small: 30,
    big: 50,
};

const StyledButton = styled.button`
    border-radius: 50%;
    display: flex;
    
    width: ${props => props.size === 'full' ? '100%' : (sizes[props.size] + 'px')}
    height: ${props => props.size === 'full' ? '100%' : (sizes[props.size] + 'px')}
`;

StyledButton.defaultProps = {
    size: 'small',
};

StyledButton.propTypes = {
    size: Type.oneOfType([Type.oneOf(['small', 'big', 'full']), Type.string]),
};

export default StyledButton;