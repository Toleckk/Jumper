import React from "react";
import StyledButton from "./StyledButton";
import Icon from "./Icon";

const Eye = props => <StyledButton type="button" {...props}>
    <Icon/>
</StyledButton>;

export default Eye;