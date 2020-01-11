import styled from "styled-components";
import Type from "prop-types";

const sizes = {
    big: {
        size: '155px',
        // TODO: offset
    },
    small: {
        size: '35px',
        offset: '-20px',
    },
};

const Avatar = styled.img`
    user-select: none;
    border-radius: 50%;
    width: ${props => sizes[props.size].size};
    height: ${props => sizes[props.size].size};
    ${props => props.stacked && `margin-left: ${sizes[props.size].offset}`}
    ${props => props.border && `border: 2px solid rgb(${props.theme.primary});
                                box-shadow: rgb(${props.theme.primary}) 0 0 10px;
    `}
`;

Avatar.defaultProps = {
    size: 'big',
    stacked: false,
    border: false,
};

Avatar.propTypes = {
    size: Type.oneOf(['big', 'small']),
    border: Type.bool,
    stacked: Type.bool,
};

export default Avatar;