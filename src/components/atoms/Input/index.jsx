import React, {useState} from "react";
import StyledFieldset from "./StyledFieldset";
import StyledLegend from "./StyledLegend";
import StyledInput from "./StyledInput";
import withValidation from "./withValidation";
import Flex from "../Flex";
import Eye from "../Eye";

const TestInput = ({placeholder, onFocus, onBlur, password, onMouseDown, onMouseUp, ...props}) => {
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
        <StyledLegend focused={focus}>{placeholder}</StyledLegend>
        <Flex>
            <StyledInput type={password && !eyePressed ? 'password' : 'text'} onFocus={setFocused} onBlur={setUnfocused} {...props}/>
            {password ? <Eye onMouseDown={setPressed} onMouseUp={setUnpressed}/> : ''}
        </Flex>
    </StyledFieldset>;
};

export default withValidation(TestInput);