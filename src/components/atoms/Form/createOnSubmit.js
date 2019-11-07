export default function createOnSubmit(onSubmit, validate, data, setErrors) {
    return event => {
        if (validate) {
            const errors = validate(data);
            if (!errors || !Object.values(errors).some(e => e))
                onSubmit(data);
            setErrors(errors);
        } else
            onSubmit(data);
        event.stopPropagation();
        event.preventDefault();
        return false;
    }
};