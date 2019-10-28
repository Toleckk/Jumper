import React from 'react';
import Input from "../../../atoms/Input";
import Container from "./Container";
import Button from "../../../atoms/Button";
import local from "../../../../local";
import {withFormik} from "formik";
import * as Yup from "yup";

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

const Authorization = ({handleChange, handleSubmit}) => {
    const {passwordInputPlaceholder, loginInputPlaceholder} = local.info;

    return <Container onSubmit={handleSubmit}>
        <Input name="login" placeholder={loginInputPlaceholder} onChange={handleChange}/>
        <Input name="password" type="password" placeholder={passwordInputPlaceholder} onChange={handleChange}/>
        <Button type="submit">{local.info.signInButton}</Button>
    </Container>
};

export default form(Authorization);