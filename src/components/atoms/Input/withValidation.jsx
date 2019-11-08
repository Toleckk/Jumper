import React, {useState} from "react";
import Type from "prop-types";

const withValidation = Component => {
    const ValidatedComponent = ({pattern, onChange, ...props}) => {
        const [value, setValue] = useState('');

        if(pattern) {
            const checkPattern = createPatternChecker(pattern, onChange, setValue);

            return <Component value={value} onChange={checkPattern} {...props}/>;
        }

        return <Component onChange={onChange} {...props}/>;
    };

    ValidatedComponent.defaultProps = {
        pattern: null,
        onChange: null,
    };

    ValidatedComponent.propTypes = {
        pattern: Type.instanceOf(RegExp),
        onChange: Type.func
    };

    return ValidatedComponent;
};


const createPatternChecker = (pattern, onChange, setValue) => event => {
    const {value} = event.target;

    if(!pattern || pattern.test(value))
        setValue(value);

    return onChange && onChange(event);
};



export default withValidation;