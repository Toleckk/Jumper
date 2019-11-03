import React, {useRef} from 'react';
import StyledButton from "./StyledButton";

const Button = ({onClick, ...props}) => {
    const ref = useRef(null);

    const blur = () => {
        ref.current.blur();
        return onClick && onClick();
    };

    return <StyledButton onClick={blur} {...props} ref={ref}/>;
};

export default Button;