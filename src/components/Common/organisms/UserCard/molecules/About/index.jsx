import React, {useState} from 'react';
import Type from "prop-types";
import {ColoredSpan} from "../../atoms";
import StyledInput from "../../atoms/StyledInput";
import Container from "./Container";

const About = ({about, editMode, onChange}) => {
    const [text, setText] = useState(about);

    const onChangeListener = e => {
        setText(e.target.value);
        return onChange && onChange(e);
    };

    if(!editMode && about !== text)
        setText(about);

    return <Container>{editMode
        ? <StyledInput value={text} onChange={onChangeListener} style={{width: '100%'}} name="about"/>
        : about && <ColoredSpan>{about}</ColoredSpan>
    }</Container>;
};

About.defaultProps = {
    onChange: null,
};

About.propTypes = {
    about: Type.string.isRequired,
    editMode: Type.bool.isRequired,
    onChange: Type.func,
};

export default React.memo(About);