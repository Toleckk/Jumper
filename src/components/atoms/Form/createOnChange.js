export default function createOnChange(updateState, resetFieldErrorOnChange, errors, setErrors, validateOnChange) {
    return event => {
        if (resetFieldErrorOnChange)
            reset(errors, setErrors, event.target.value, event.target.name);
        if (validateOnChange)
            updateState(event);
    };
};

const reset = (errors, setErrors, value, name) => value && setErrors({...errors, [name]: false});