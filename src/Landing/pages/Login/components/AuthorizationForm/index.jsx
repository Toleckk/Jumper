import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {Field, Form} from "react-final-form";
import {useHistory} from "react-router-dom";
import {useTranslation} from "Common/contexts/Localization";
import {Input, Loader} from "Common/molecules";
import useValidation from "Common/hooks/useValidation";
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Link from "./StyledLink";
import {CREATE_SESSION} from "Common/apollo/entities/session";
import {ME} from "Common/apollo/entities/user"

const Authorization = () => {
    const {t} = useTranslation();
    const [authorize, {loading}] = useMutation(CREATE_SESSION, {refetchQueries: [{query: ME}]});
    const {login, authorization} = useValidation();
    const history = useHistory();

    const submit = async data => {
        const errors = authorization(data);

        if (errors && Object.values(errors).length)
            return errors;

        try {
            await authorize({variables: {...data}});
            history.push('/feed');
        } catch (e) {
            if (e.graphQLErrors && e.graphQLErrors.length)
                switch (e.graphQLErrors[0].message) {
                    case 'User does not exist':
                        return {login: 'User does not exist'};
                    case 'Invalid password':
                        return {password: 'Invalid password'};
                    default:
                        throw e;
                }

            if(!e.networkError)
                throw e;
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
            <Link to="/landing/restore">{t('Forgot password?')}</Link>
        </StyledForm>
    </>}</Form>;
};

export default React.memo(Authorization);