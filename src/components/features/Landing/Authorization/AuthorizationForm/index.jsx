import React from 'react';
import StyledForm from "./StyledForm";
import {useLocalizationContext} from "../../../../../contexts/Localization";
import StyledButton from "./StyledButton";
import Input from "../../../../molecules/Input";
import Form from "../../../../molecules/Form";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login, password}) => ({
    login: !login || !login.length,
    password: !password || !password.length
});

const Authorization = () => {
    const {info} = useLocalizationContext();
    const {passwordInputPlaceholder: password, loginInputPlaceholder: login} = info;

    return <Form onSubmit={console.log} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
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
            <StyledButton type="submit">{info.signInButton}</StyledButton>
        </>
    }</Form>;
};

export default React.memo(Authorization);