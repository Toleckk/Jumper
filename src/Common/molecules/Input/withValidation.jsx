import React, {useState} from "react";
import Type from "prop-types";

const withValidation = Component => {
    const ValidatedComponent = ({regex, onChange, ...props}) => {
        const [value, setValue] = useState('');

        if(regex) {
            const checkPattern = createPatternChecker(regex, onChange, setValue);

            return <Component value={value} onChange={checkPattern} {...props}/>;
        }

        return <Component onChange={onChange} {...props}/>;
    };

    ValidatedComponent.defaultProps = {
        regex: null,
        onChange: null,
    };

    ValidatedComponent.propTypes = {
        regex: Type.instanceOf(RegExp),
        onChange: Type.func,
    };

    return React.memo(ValidatedComponent);
};

const createPatternChecker = (regex, onChange, setValue) => event => {
    const {value} = event.target;

    if(!regex || regex.test(value))
        setValue(value);

    return onChange && onChange(event);
};

export default withValidation;