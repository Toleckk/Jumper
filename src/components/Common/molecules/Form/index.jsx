import Type from "prop-types";
import React, {useEffect, useState} from "react";
import {createOnChange, createOnSubmit} from "./helpers";

const Form = ({children, onSubmit, validate, resetFieldErrorOnChange, as: Component, validateOnChange, ...props}) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(
        () => {
            if(validateOnChange) {
                const newErrors = validateOnChange === true ? validate(data) : validateOnChange(data);
                if (newErrors)
                    setErrors({...errors, ...newErrors});
            }
        },
        [data],
    );

    const updateState = ({target: {name, value}}) => setData({...data, [name]: value});
    const onChange = createOnChange(updateState, resetFieldErrorOnChange, errors, setErrors, validateOnChange, data);

    return <Component onSubmit={createOnSubmit(onSubmit, validate, data, setErrors)} {...props}>
        {children({updateState, errors, setErrors, onChange}, data)}
    </Component>;
};

Form.defaultProps = {
    onSubmit: null,
    validate: null,
    validateOnChange: false,
    resetFieldErrorOnChange: false,
    as: 'form',
};

Form.propTypes = {
    children: Type.func.isRequired,
    onSubmit: Type.func.isRequired,
    validate: Type.func,
    validateOnChange: Type.oneOfType([Type.func, Type.bool]),
    as: Type.elementType,
    resetFieldErrorOnChange: Type.bool,
};

export default React.memo(Form);