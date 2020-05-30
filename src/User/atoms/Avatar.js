import styled from "styled-components";
import Type from "prop-types";
import {DEFAULT_LIGHT_AVATAR, DEFAULT_DARK_AVATAR} from "Common/apollo/entities/user"


const sizes = {
    big: {
        desktop: {
            size: '150px',
            borderSize: '4px',
            shadow: '25px',
        },
        mobile: {
            size: '100px',
            borderSize: '2px',
            shadow: '20px',
        },
        offset: '-30px',

    },
    small: {
        desktop: {
            size: '30px',
            borderSize: '1px',
            shadow: '1px',
        },
        mobile: {
            size: '30px',
            borderSize: '1px',
            shadow: '1px',
        },
        offset: '-12px',
    },
    header: {
        desktop: {
            size: '40px',
            borderSize: '1px',
            shadow: '1px',
        },
        mobile: {
            size: '40px',
            borderSize: '1px',
            shadow: '1px',
        },
        offset: '-12px',
    },
    navigation: {
        desktop: {
            size: '55px',
            borderSize: '2px',
            shadow: '2px',
        },
        mobile: {
            size: 'calc(min(10vh, 15vw) * 0.7)',
            borderSize: '1px',
            shadow: '1px',
        },
        offset: '-6px',
    },
    search: {
        desktop: {
            size: '125px',
            borderSize: '2px',
            shadow: '1px',
        },
        mobile: {
            size: '85px',
            borderSize: '1px',
            shadow: '1px',
        },
        offset: '-6px',
    }
};

const Avatar = styled.img.attrs(props => ({alt: 'avatar', src: props.src || (props.theme.name === 'dark' ? DEFAULT_DARK_AVATAR : DEFAULT_LIGHT_AVATAR)}))`
  user-select: none;
  cursor: pointer;
  border-radius: 50%;
  
  background: rgb(${props => props.theme.primaryDark});
  
  ${props => props.hover && `&:hover {
      filter: brightness(0.8);
    }`
  }
  
  ${props => props.stacked && `margin-left: ${sizes[props.size].offset}`}
  
  
  ${props => createStyles(props, sizes[props.size].mobile)};
  
  @media (min-width: 768px) {
    ${props => createStyles(props, sizes[props.size].desktop)};
  }
`;

const createStyles = ({theme, border}, {size, borderSize, shadow}) => `
    width: ${size};
    height: ${size};
        
    ${border ? `border: ${borderSize} solid rgb(${theme.primary});` : ''}
    ${border ? `box-shadow: rgb(${theme.primary}) 0 0 ${shadow};` : ''}
`;

Avatar.defaultProps = {
    size: 'big',
    stacked: false,
    border: false,
    hover: false,
};

Avatar.propTypes = {
    size: Type.oneOf(['big', 'small', 'header', 'navigation', 'search']),
    border: Type.bool,
    stacked: Type.bool,
    hover: Type.bool,
    src: Type.string.isRequired,
};

export default Avatar;