import React from 'react';
import Input from "../../../atoms/Input";
import Container from "./Container";
import Button from "../../../atoms/Button";
import local from "../../../../local";
import {withFormik} from "formik";
import * as Yup from "yup";
import Type from 'prop-types';

const form = withFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
    handleSubmit: console.log,
    validationSchema: Yup.object().shape({
        login: Yup.string().required(true),
        password: Yup.string().required(true),
    })
});

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const Authorization = ({handleChange, handleSubmit}) => {
    const {passwordInputPlaceholder, loginInputPlaceholder} = local.info;

    return <Container onSubmit={handleSubmit}>
        <Input name="login" placeholder={loginInputPlaceholder} onChange={handleChange} pattern={loginPattern}/>
        <Input name="password" type="password" placeholder={passwordInputPlaceholder} onChange={handleChange}/>
        <Button type="submit">{local.info.signInButton}</Button>
    </Container>;
};

Authorization.propTypes = {
    handleChange: Type.func,
    handleSubmit: Type.func
};

export default form(Authorization);