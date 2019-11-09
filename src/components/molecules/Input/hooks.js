import {useState} from "react";

export const useFocused = (onFocus, onBlur) => {
    const [focus, setFocus] = useState(false);

    const setFocused = event => {
        setFocus(true);
        return onFocus && onFocus(event);
    };

    const setUnfocused = event => {
        setFocus(false);
        return onBlur && onBlur(event);
    };

    return [focus, setFocused, setUnfocused];
};

export const useEye = () => {
    const [eyePressed, setEyePressed] = useState(false);

    const setPressed = () => setEyePressed(true);

    const setUnpressed = () => setEyePressed(false);

    return [eyePressed, setPressed, setUnpressed];
};