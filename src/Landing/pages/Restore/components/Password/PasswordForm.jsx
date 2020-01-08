import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {useParams, useHistory} from "react-router-dom";
import {Field, Form} from "react-final-form";
import {useTranslation} from "Common/contexts/Localization";
import {Loader} from "Common/molecules";
import useValidation from "Common/hooks/useValidation";
import {StyledButton, StyledForm, StyledInput} from "../atoms";
import {CONFIRM} from "../../mutations/restore";

const PasswordForm = () => {
    const {t} = useTranslation();
    const {token} = useParams();
    const {passwordCreation} = useValidation();
    const history = useHistory();

    const [confirmRestore, {loading}] = useMutation(CONFIRM, {variables: {token}});

    const submit = async ({password}) => {
        await confirmRestore({variables: {password}});
        history.push('/feed');
    };

    return <Form onSubmit={submit} validate={passwordCreation}>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>
            <Field name="password">{({input, meta: {error}}) =>
                <StyledInput password legend={t('password')} {...input} error={input.value && error}/>
            }</Field>
            <Field name="confirm">{({input, meta: {error}}) =>
                <StyledInput password legend={t('Confirm password')} {...input} error={input.value && error}/>
            }</Field>

            <StyledButton>{t('next')}</StyledButton>
        </StyledForm>
    </>}</Form>
};

export default React.memo(PasswordForm);