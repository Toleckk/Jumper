import React, {useRef} from 'react';
import StyledButton from "./StyledButton";
import Type from "prop-types";

const Button = ({onClick, ...props}) => {
    const ref = useRef(null);

    const blur = () => {
        ref.current.blur();
        return onClick && onClick();
    };

    return <StyledButton onClick={blur} {...props} ref={ref}/>;
};

Button.defaultProps = {
    onClick: null,
};

Button.propTypes = {
    onClick: Type.func,
};

export default React.memo(Button);