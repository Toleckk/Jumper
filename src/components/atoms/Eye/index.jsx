import React from "react";
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

    return <StyledButton type="button" {...props} onMouseDown={onMousePressed} onMouseUp={onMouseReleased}>
        <Icon/>
    </StyledButton>;
};


export default Eye;