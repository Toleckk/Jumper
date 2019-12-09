import React, {useState} from 'react';
import Type from "prop-types";
import StyledSpan from "./StyledSpan";
import {StyledInput} from "../../atoms";

const Nickname = ({nickname, editMode, children, onChange}) => {
    const [text, setText] = useState(nickname);

    const onChangeListener = e => {
        setText(e.target.value);

        return onChange && onChange(e);
    };

    if (editMode)
        return <StyledInput large centered value={text} onChange={onChangeListener} style={{width: text.length * 9 + 'px'}}/>;

    if (text !== nickname)
        setText(nickname);

    return <StyledSpan>
        {text}
        {children}
    </StyledSpan>;
};

Nickname.defaultProps = {
    children: null,
    onChange: null,
};

Nickname.propTypes = {
    nickname: Type.string.isRequired,
    editMode: Type.bool.isRequired,
    children: Type.any,
    onChange: Type.func,
};

export default React.memo(Nickname);