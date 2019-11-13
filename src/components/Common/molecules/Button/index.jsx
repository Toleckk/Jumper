import React, {useRef} from 'react';
import Type from "prop-types";
import StyledButton from "./StyledButton";

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