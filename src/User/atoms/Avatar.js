import styled from "styled-components";
import Type from "prop-types";

const sizes = {
    big: {
        size: '150px',
        // TODO: offset
    },
    small: {
        size: '35px',
        offset: '-18px',
    },
};

const Avatar = styled.img`
    user-select: none;
    cursor: pointer;
    border-radius: 50%;
    width: ${props => sizes[props.size].size};
    height: ${props => sizes[props.size].size};
    ${props => props.stacked && `margin-left: ${sizes[props.size].offset}`}
    ${props => props.border && `border: ${props.size === 'big' ? 4 : 2}px solid rgb(${props.theme.primary});
                                box-shadow: rgb(${props.theme.primary}) 0 0 ${props.size === 'big' ? 25 : 10}px;
    `}
    background: rgb(${props => props.theme.primaryDark});
    
    &:hover {
      filter: brightness(0.8);
    }
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