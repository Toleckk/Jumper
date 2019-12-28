export function createOnChange(updateState, resetFieldErrorOnChange, errors, setErrors) {
    return event => {
        if (resetFieldErrorOnChange && event.target.value)
            setErrors({...errors, [event.target.name]: false});
        updateState(event);
    };
}

export function createOnSubmit(onSubmit, validate, data, setErrors) {
    return event => {
        try {
            if (validate) {
                const errors = validate(data);
                if (!errors || !Object.values(errors).some(e => e))
                    onSubmit(data);
                setErrors(errors);
            } else
                onSubmit(data);
        } catch (e) {
        }
        event.stopPropagation();
        event.preventDefault();
        return false;
    };
}