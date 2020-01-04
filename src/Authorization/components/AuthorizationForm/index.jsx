import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {useLocalizationContext} from "Common/contexts/Localization";
import {Input, Form} from "Common/molecules";
import useValidation from "Common/hooks/useValidation";
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Link from "./StyledLink";
import {CREATE} from "../../mutations/session";

const Authorization = () => {
    const {t} = useLocalizationContext();
    const [authorize] = useMutation(CREATE);
    const {login, authorization} = useValidation('login', 'authorization');

    const submit = data => authorize({variables: {...data}});

    return <Form onSubmit={submit} validate={authorization} as={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Input name="login"
                   legend={t('login')}
                   regex={login}
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