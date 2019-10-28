import React, {useState} from 'react';
import StyledInput from "./StyledInput";


const Input = ({pattern, onChange, ...props}) => {
    const [value, setValue] = useState('');

    const checkPattern = event => {
        const {value} = event.target;

        if(typeof pattern === 'object' && pattern instanceof RegExp) {
            if(pattern.test(value))
                setValue(value);
        } else
            setValue(value);

        return typeof onChange === 'function' && onChange(event);
    };

    return <StyledInput value={value} onChange={checkPattern} pattern={pattern} {...props}/>;
};

export default Input;