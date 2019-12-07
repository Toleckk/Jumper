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

const submit = data => fetch('/login', {
    method: "post",
    credentials: 'same-origin',
    body: JSON.stringify(data),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

const Authorization = () => {
    const {t} = useLocalizationContext();

    return <Form onSubmit={submit} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Input id="login"
                   name="login"
                   legend={t('login')}
                   pattern={loginPattern}
                   onChange={onChange}
                   onBlur={updateState}
                   error={errors.login}
            />
            <Input id="password"
                   name="password"
                   password
                   legend={t('password')}
                   onChange={onChange}
                   onBlur={updateState}
                   error={errors.password}
            />
            <StyledButton type="submit">{t('signIn')}</StyledButton>
            <Link to="/restore">{t('Forgot password?')}</Link>
        </>
    }</Form>;
};

export default React.memo(Authorization);