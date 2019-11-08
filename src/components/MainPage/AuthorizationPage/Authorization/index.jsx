import React from 'react';
import StyledForm from "./StyledForm";
import local from "../../../../local";
import Type from 'prop-types';
import StyledButton from "./StyledButton";
import Input from "../../../atoms/Input";
import Form from "../../../atoms/Form";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login, password}) => ({
    login: !login || !login.length,
    password: !password || !password.length
});

const Authorization = () => {
    const {passwordInputPlaceholder: password, loginInputPlaceholder: login} = local.info;

    return <Form onSubmit={console.log} validate={validate} Component={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Input id="login"
                   name="login"
                   legend={login}
                   pattern={loginPattern}
                   onChange={onChange}
                   onBlur={updateState}
                   error={errors.login}
            />
            <Input id="password"
                   name="password"
                   password
                   legend={password}
                   onChange={onChange}
                   onBlur={updateState}
                   error={errors.password}
            />
            <StyledButton type="submit">{local.info.signInButton}</StyledButton>
        </>
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