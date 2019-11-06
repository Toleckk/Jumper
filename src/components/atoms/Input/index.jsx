import React, {useState} from "react";
import Type from "prop-types";
import StyledFieldset from "./StyledFieldset";
import StyledLegend from "./StyledLegend";
import StyledInput from "./StyledInput";
import withValidation from "./withValidation";
import Flex from "../Flex";
import Eye from "../Eye";

const Input = ({id, placeholder, onFocus, onBlur, password, onMouseDown, onMouseUp, ...props}) => {
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

    return <StyledFieldset focused={focus}>
        <StyledLegend focused={focus}>
            <label for={id}>{placeholder}</label>
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

Input.propTypes = {
    id: Type.string,
    placeholder: Type.string,
    password: Type.bool,
    onFocus: Type.func,
    onBlur: Type.func,
    onMouseDown: Type.func,
    onMouseUp: Type.func
};

export default withValidation(Input);