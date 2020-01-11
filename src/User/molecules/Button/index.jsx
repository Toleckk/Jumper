import React from 'react';
import Type from 'prop-types';
import StyledButton from "./StyledButton";
import {Icon} from "../../atoms";

const Button = ({type, icon, children}) => {
    return <StyledButton type={type}>{
        icon
            ? <Icon icon={icon}/>
            : children
    }</StyledButton>;
};

Button.defaultProps = {
    type: 'circle',
    icon: null
};

Button.propTypes = {
    type: Type.oneOf(['circle']),
    icon: Type.string,
};

export default React.memo(Button);