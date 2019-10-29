import React from 'react';
import Input from "../../../atoms/Input";
import Container from "./Container";
import Button from "../../../atoms/Button";
import local from "../../../../local";
import {withFormik} from "formik";
import * as Yup from "yup";
import Type from 'prop-types';
import validate from "./validation";

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

export default validate(Authorization);