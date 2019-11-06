import React from 'react';
import Form from "./Form";
import local from "../../../../local";
import Type from 'prop-types';
import StyledButton from "./StyledButton";
import Input from "../../../atoms/Input";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const createOnChange = (errors, setErrors, handleChange) => event => {
    const {value, name} = event.target;

    if (value)
        setErrors({...errors, [name]: false});

    return handleChange(event);
};

const validate = ({login, password}) => ({
    login: !login || !login.length,
    password: !password || !password.length
});

const Authorization = () => {
    const {passwordInputPlaceholder: password, loginInputPlaceholder: login} = local.info;

    return <Form onSubmit={console.log} validate={validate}>{
        ({updateState, errors, setErrors}) => {
            const onChange = createOnChange(errors, setErrors, updateState);
            return <>
                <Input id="login"
                       name="login"
                       placeholder={login}
                       pattern={loginPattern}
                       onChange={onChange}
                       onBlur={updateState}
                       error={errors.login}
                />
                <Input id="password"
                       name="password"
                       password
                       placeholder={password}
                       onChange={onChange}
                       onBlur={updateState}
                       error={errors.password}
                />
                <StyledButton type="submit">{local.info.signInButton}</StyledButton>
            </>;
        }
    }</Form>;
};

Authorization.propTypes = {
    handleChange: Type.func,
    handleSubmit: Type.func,
    setErrors: Type.func,
    errors: Type.object,
    values: Type.object
};

export default Authorization;