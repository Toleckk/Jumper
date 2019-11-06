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

const Form = ({children, onSubmit, validate, ...props}) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const updateState = ({target: {name, value}}) => setData({...data, [name]: value});

    return <form {...props} onSubmit={createOnSubmit(onSubmit, validate, data, setErrors)}>
        {children({updateState, errors, setErrors}, data)}
    </form>;
};

Form.propTypes = {
    children: Type.oneOfType([Type.array, Type.instanceOf(React.Component), Type.func]).isRequired,
    onSubmit: Type.func.isRequired,
    validate: Type.func
};

export default Form;