import React from 'react';
import Type from 'prop-types';
import StyledButton from "./StyledButton";
import {Icon} from "../../atoms";

const Button = ({type, icon, children, ...props}) => {
    return <StyledButton {...props}>{
        icon
            ? <Icon icon={icon}/>
            : children
    }</StyledButton>;
};

Button.defaultProps = {
    icon: null
};

Button.propTypes = {
    icon: Type.string,
};

export default React.memo(Button);