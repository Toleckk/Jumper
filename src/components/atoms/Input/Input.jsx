import React, {useState} from 'react';
import StyledInput from "./StyledInput";
import Type from 'prop-types';

const createPatternChecker = (pattern, onChange, setValue) => event => {
    const {value} = event.target;

    if(!pattern || pattern.test(value))
        setValue(value);

    return onChange && onChange(event);
};


const Input =({pattern, onChange, ...props}) => {
    const [value, setValue] = useState('');
    const checkPattern = createPatternChecker(pattern, onChange, setValue);

    return <StyledInput value={value} onChange={checkPattern} {...props}/>;
};

Input.propTypes = {
    pattern: Type.instanceOf(RegExp),
    onChange: Type.func
};

export default Input;