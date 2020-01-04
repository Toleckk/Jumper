import React from 'react';
import {useParams} from 'react-router-dom';
import {useMutation} from "@apollo/react-hooks";
import {useLocalizationContext} from "Common/contexts/Localization";
import {Field, Form} from "react-final-form";
import {CONFIRM} from "Landing/mutations/registration";
import {Loader} from "Common/molecules";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import Row from "../atoms/Row";
import StyledInput from "../atoms/StyledInput";

const isValidPassword = text => (
    text
    && /[a-z]+/.test(text)
    && /[A-Z]+/.test(text)
    && /\d/.test(text)
    && text.length >= 8
    && text.length <= 50
);

const PasswordForm = () => {
    const {t} = useLocalizationContext();
    const {token} = useParams();

    const [confirmRegistration, {loading}] = useMutation(CONFIRM, {variables: {token}});
    // TODO: redirect
    const submit = ({password}) => confirmRegistration({variables: {password}});

    const validate = ({password, confirm}) => {
        if(isValidPassword(password) && isValidPassword(confirm) && password === confirm)
            return false;

        return {
            password: !isValidPassword(password),
            confirm: confirm !== password,
        };
    };

    return <Form onSubmit={submit} validate={validate}>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>
            <Row>
                <label htmlFor="password">{t('Password format')}</label>
                <Field name="password">{({input, meta: {error}}) => (
                    <StyledInput id="password"
                                 password
                                 legend={t('password')}
                                 error={input.value && error}
                                 {...input}
                    />
                )}</Field>
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="confirm">{t('Enter password again')}</label>
                <Field name="confirm">{({input, meta: {error}}) => (
                    <StyledInput id="confirm"
                                 password
                                 legend={t('Confirm password')}
                                 error={input.value && error}
                                 {...input}
                    />
                )}</Field>
            </Row>
            <Divider/>
            <StyledButton>{t('next')}</StyledButton>
        </StyledForm>
    </>
    }</Form>
};

export default React.memo(PasswordForm);