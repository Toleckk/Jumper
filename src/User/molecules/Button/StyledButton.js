import styled from "styled-components";
import Type from "prop-types";
import {Flex} from "Common/atoms";

const sizes = {
    small: 30,
    big: 50,
};

const StyledButton = styled(Flex).attrs({as: 'button'})`
    width: ${props => props.size === 'full' ? '100%' : (sizes[props.size] + 'px')};
    height: ${props => props.size === 'full' ? '100%' : (sizes[props.size] + 'px')};
    ${props => props.type === 'circle' && 'border-radius: 50%;'}
`;

StyledButton.defaultProps = {
    type: 'circle',
    size: 'small',
};

StyledButton.propTypes = {
    type: Type.oneOf(['circle', 'usual']),
    size: Type.oneOfType([Type.oneOf(['small', 'big', 'full']), Type.string]),
};

export default StyledButton;