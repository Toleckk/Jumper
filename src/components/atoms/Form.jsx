import React, {useState} from "react";
import Type from "prop-types";

const createOnSubmit = (onSubmit, validate, data, setErrors) => event => {
    if (validate) {
        const errors = validate(data);
        if(!errors || !Object.values(errors).some(e => e))
            onSubmit(data);
        setErrors(errors);
    } else
        onSubmit(data);
    event.stopPropagation();
    event.preventDefault();
    return false;
};

const Form = ({children, onSubmit, validate, Component, ...props}) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const updateState = ({target: {name, value}}) => setData({...data, [name]: value});

    return <Component {...props} onSubmit={createOnSubmit(onSubmit, validate, data, setErrors)}>
        {children({updateState, errors, setErrors}, data)}
    </Component>;
};

Form.defaultProps = {
    Component: 'form'
};

Form.propTypes = {
    children: Type.func.isRequired,
    onSubmit: Type.func.isRequired,
    validate: Type.func,
    Component: Type.element
};

export default Form;