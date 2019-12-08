import React from 'react';
import {login} from "api";
import {useTranslation} from "contexts/Localization";
import {Form, Input} from "components/Common/molecules";
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Link from "./Link";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login, password}) => ({
    login: !login || !login.length,
    password: !password || !password.length
});

const Authorization = () => {
    const {t} = useTranslation();

    return <Form onSubmit={login} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
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