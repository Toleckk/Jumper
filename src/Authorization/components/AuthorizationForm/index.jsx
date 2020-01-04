import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {Field, Form} from "react-final-form";
import {useTranslation} from "Common/contexts/Localization";
import {Input, Loader} from "Common/molecules";
import useValidation from "Common/hooks/useValidation";
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Link from "./StyledLink";
import {CREATE} from "../../mutations/session";

const Authorization = () => {
    const {t} = useTranslation();
    const [authorize, {loading}] = useMutation(CREATE);
    const {login, authorization} = useValidation();

    const submit = async data => {
        const errors = authorization(data);

        if (errors && Object.values(errors).length)
            return errors;

        try {
            await authorize({variables: {...data}});
            // TODO: redirect
        } catch (e) {
            // TODO: error context
            return e.graphQLErrors[0].extensions;
        }
    };

    return <Form onSubmit={submit}>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>

            <Field name="login" validateFields={[]}>{
                ({input, meta: {submitError, submitFailed, dirtySinceLastSubmit}}) => (
                    <Input legend={t('login')}
                           regex={login}
                           {...input}
                           error={submitFailed && !dirtySinceLastSubmit && t(submitError)}
                    />
                )
            }</Field>

            <Field name="password" validateFields={[]}>{
                ({input, meta: {submitError, submitFailed, dirtySinceLastSubmit}}) => (
                    <Input legend={t('password')}
                           password
                           {...input}
                           error={submitFailed && !dirtySinceLastSubmit && t(submitError)}
                    />
                )
            }</Field>

            <StyledButton type="submit">{t('signIn')}</StyledButton>
            <Link to="/restore">{t('Forgot password?')}</Link>
        </StyledForm>
    </>}</Form>;
};

export default React.memo(Authorization);