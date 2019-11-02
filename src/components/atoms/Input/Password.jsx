import React, {useState} from 'react';
import {Input} from './index';
import Eye from "../Eye";
import Flex from "../Flex";

const preventFocusChange = event => {
    event.stopPropagation();
    event.preventDefault();
    return false;
};

const Password = ({pattern, onChange, ...props}) => {
    const [eye, setEye] = useState(false);

    const invert = () => setEye(!eye);

    return <Flex align="center">
        <Input pattern={pattern} onChange={onChange} {...props} type={eye ? 'text' : 'password'}/>
        <Eye onMouseDown={preventFocusChange} onClick={invert} type="button"/>
    </Flex>;
};

Password.propTypes = Input.propTypes;

export default Password;