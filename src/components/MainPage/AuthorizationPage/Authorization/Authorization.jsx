import React from 'react';
import Form from "./Form";
import local from "../../../../local";
import Type from 'prop-types';
import validate from "./validation";
import StyledButton from "./StyledButton";
import Input from "../../../atoms/Input";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const createOnChange = (errors, setErrors, handleChange) => event => {
    const {value, name} = event.target;

    if (value)
        setErrors({...errors, [name]: false});

    return handleChange(event);
};

const Authorization = ({handleChange, handleSubmit, errors, values, setErrors}) => {
    const {passwordInputPlaceholder: password, loginInputPlaceholder: login} = local.info;

    const onChange = createOnChange(errors, setErrors, handleChange);

    return <Form onSubmit={handleSubmit}>
        <Input id="login"
               name="login"
               placeholder={login}
               onChange={onChange}
               pattern={loginPattern}
               error={errors.login && !values.login}
        />
        <Input id="password"
               name="password"
               password
               placeholder={password}
               onChange={onChange}
               error={errors.password && !values.password}
        />
        <StyledButton type="submit">{local.info.signInButton}</StyledButton>
    </Form>;
};

Authorization.propTypes = {
    handleChange: Type.func,
    handleSubmit: Type.func,
    setErrors: Type.func,
    errors: Type.object,
    values: Type.object
};

export default validate(Authorization);