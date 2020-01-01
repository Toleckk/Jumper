import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import {Input, Form} from "Common/molecules";
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Link from "./StyledLink";
import {useMutation} from "@apollo/react-hooks";
import {CREATE} from "../../../mutations/session";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login, password}) => ({
    login: !login || !login.length,
    password: !password || !password.length
});

const Authorization = () => {
    const {t} = useLocalizationContext();
    const [authorize] = useMutation(CREATE);

    const submit = data => authorize({variables: {...data}});

    return <Form onSubmit={submit} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Input name="login"
                   legend={t('login')}
                   regex={loginPattern}
                   onChange={onChange}
                   onBlur={updateState}
                   error={errors.login}
            />
            <Input name="password"
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