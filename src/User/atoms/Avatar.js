import styled from "styled-components";
import Type from "prop-types";

const sizes = {
    big: {
        size: '150px',
        mobile: '100px'
    },
    small: {
        size: '30px',
        offset: '-12px',
    },
};

const Avatar = styled.img`
    user-select: none;
    cursor: pointer;
    border-radius: 50%;
    width: ${props => sizes[props.size].size};
    height: ${props => sizes[props.size].size};
    
    @media(max-width: 768px) {
      width: ${props => sizes[props.size].mobile || sizes[props.size].size};
      height: ${props => sizes[props.size].mobile || sizes[props.size].size};
      ${props => props.border && `border: ${props.size === 'big' ? 2 : 1}px solid rgb(${props.theme.primary});
                                box-shadow: rgb(${props.theme.primary}) 0 0 ${props.size === 'big' ? 20 : 1}px;
      `}
    }
    
    ${props => props.stacked && `margin-left: ${sizes[props.size].offset}`}
    ${props => props.border && `border: ${props.size === 'big' ? 4 : 1}px solid rgb(${props.theme.primary});
                                box-shadow: rgb(${props.theme.primary}) 0 0 ${props.size === 'big' ? 25 : 1}px;
    `}
    background: rgb(${props => props.theme.primaryDark});
    
    ${props => props.hover && `&:hover {
      filter: brightness(0.8);
    }`}
`;

Avatar.defaultProps = {
    size: 'big',
    stacked: false,
    border: false,
    hover: false,
};

Avatar.propTypes = {
    size: Type.oneOf(['big', 'small']),
    border: Type.bool,
    stacked: Type.bool,
    hover: Type.bool,
};

export default Avatar;