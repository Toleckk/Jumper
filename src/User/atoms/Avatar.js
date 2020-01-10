import styled from "styled-components";
import Type from "prop-types";

const sizes = {
    big: 155,
    small: 40,
};

const Avatar = styled.img`
    border-radius: 50%;
    width: ${props => sizes[props.size]}px;
    height: ${props => sizes[props.size]}px;
    ${props => props.stacked && `margin-left: -${sizes[props.size] / 2}px;`}
`;

Avatar.defaultProps = {
    size: 'big',
    stacked: false,
};

Avatar.propTypes = {
    size: Type.oneOf(['big', 'small']),
    stacked: Type.bool,
};

export default Avatar;