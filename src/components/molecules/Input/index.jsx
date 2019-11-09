import React, {useState} from "react";
import Type from "prop-types";
import StyledFieldset from "./StyledFieldset";
import StyledLegend from "./StyledLegend";
import StyledInput from "./StyledInput";
import withValidation from "./withValidation";
import Flex from "../../atoms/Flex";
import Eye from "../Eye";

const Input = ({id, legend, className, password, error, onFocus, onBlur, onMouseDown, onMouseUp, ...props}) => {
    const [focus, setFocus] = useState(false);
    const setFocused = event => {
        setFocus(true);
        return onFocus && onFocus(event);
    };
    const setUnfocused = event => {
        setFocus(false);
        return onBlur && onBlur(event);
    };

    const [eyePressed, setEyePressed] = useState(false);
    const setPressed = event => {
        setEyePressed(true);
        return onMouseDown && onMouseDown(event);
    };
    const setUnpressed = event => {
        setEyePressed(false);
        return onMouseUp && onMouseUp(event);
    };

    return <StyledFieldset focused={focus} className={className} error={error}>
        <StyledLegend focused={focus}>
            <label htmlFor={id}>{legend}</label>
        </StyledLegend>
        <Flex>
            <StyledInput
                id={id}
                type={password && !eyePressed ? 'password' : 'text'}
                onFocus={setFocused}
                onBlur={setUnfocused}
                {...props}
            />
            {password ? <Eye onMouseDown={setPressed} onMouseUp={setUnpressed}/> : ''}
        </Flex>
    </StyledFieldset>;
};

Input.defaultProps = {
    legend: '',
    className: '',
    password: false,
    error: false,
    onFocus: null,
    onBlur: null,
    onMouseDown: null,
    onMouseUp: null,
};

Input.propTypes = {
    id: Type.string.isRequired,
    legend: Type.string,
    className: Type.string,
    password: Type.bool,
    error: Type.bool,
    onFocus: Type.func,
    onBlur: Type.func,
    onMouseDown: Type.func,
    onMouseUp: Type.func,
};

export default withValidation(Input);