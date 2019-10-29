import React from 'react';
import Input from "../../../atoms/Input";
import Container from "./Container";
import Button from "../../../atoms/Button";
import local from "../../../../local";
import Type from 'prop-types';
import validate from "./validation";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const Authorization = ({handleChange, handleSubmit, errors, values, setErrors}) => {
    const {passwordInputPlaceholder, loginInputPlaceholder} = local.info;

    const onChange = event => {
        const {value, name} = event.target;

        if(value)
            setErrors({...errors, [name]: false});

        return handleChange(event);
    };

    return <Container onSubmit={handleSubmit}>
        <Input name="login"
               placeholder={loginInputPlaceholder}
               onChange={onChange}
               pattern={loginPattern}
               error={errors.login && !values.login}
        />
        <Input name="password"
               type="password"
               placeholder={passwordInputPlaceholder}
               onChange={onChange}
               error={errors.password && !values.password}
        />
        <Button type="submit">{local.info.signInButton}</Button>
    </Container>;
};

Authorization.propTypes = {
    handleChange: Type.func,
    handleSubmit: Type.func,
    setErrors: Type.func,
    errors: Type.object,
    touched: Type.object
};

export default validate(Authorization);