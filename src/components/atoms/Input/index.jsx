import React, {useState} from 'react';
import StyledInput from "./StyledInput";
import Type from 'prop-types';


const Input = ({pattern, onChange, ...props}) => {
    const [value, setValue] = useState('');

    const checkPattern = event => {
        const {value} = event.target;

        if(!pattern || pattern.test(value))
            setValue(value);

        return onChange && onChange(event);
    };

    return <StyledInput value={value} onChange={checkPattern} pattern={pattern} {...props}/>;
};

Input.propTypes = {
    pattern: Type.instanceOf(RegExp),
    onChange: Type.func
};

export default Input;