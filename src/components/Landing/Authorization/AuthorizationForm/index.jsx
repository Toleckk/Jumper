import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import {Input, Form} from "components/Common/molecules";
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Link from "./Link";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login, password}) => ({
    login: !login || !login.length,
    password: !password || !password.length
});

const Authorization = () => {
    const {authorization} = useLocalizationContext();
    const {passwordInputPlaceholder: password, loginInputPlaceholder: login, forgot} = authorization;

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
            <StyledButton type="submit">{authorization.signInButton}</StyledButton>
            <Link to="/restore">{forgot}</Link>
        </>
    }</Form>;
};

export default React.memo(Authorization);