import React from "react";
import Type from "prop-types";
import useKeyboardConfirmation from "Common/hooks/useKeyboardConfirmation";
import StyledButton from "./StyledButton";
import Icon from "./Icon";

const preventFocusChange = event => {
    event.stopPropagation();
    event.preventDefault();
    return false;
};

const Eye = ({onMouseDown, onMouseUp, ...props}) => {
    const onMousePressed = event => {
        if (onMouseDown)
            onMouseDown(event);

        return preventFocusChange(event);
    };
    const onMouseReleased = event => {
        if (onMouseUp)
            onMouseUp(event);

        return preventFocusChange(event);
    };

    const [onDown, onUp] = useKeyboardConfirmation(onMousePressed, onMouseReleased);

    return <StyledButton
        type="button"
        onMouseDown={onMousePressed}
        onMouseUp={onMouseReleased}
        onKeyDown={onDown}
        onKeyUp={onUp}
        aria-label="show password"
        {...props}
    >
        <Icon/>
    </StyledButton>;
};

Eye.defaultProps = {
    onMouseDown: null,
    onMouseUp: null,
};

Eye.propTypes = {
    onMouseDown: Type.func,
    onMouseUp: Type.func,
};


export default React.memo(Eye);