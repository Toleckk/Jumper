import React from 'react';
import {Redirect, useParams} from 'react-router-dom'
import {useMutation} from "@apollo/react-hooks";
import {Field, Form} from "react-final-form";
import {useTranslation} from "Common/contexts/Localization";
import useValidation from "Common/hooks/useValidation";
import {Divider} from "Common/atoms";
import {Loader} from "Common/molecules";
import {CONFIRM_REGISTRATION} from "Common/apollo/entities/registration";
import {StyledInput, Row, StyledButton, StyledForm} from "../atoms";

const PasswordForm = () => {
    const {passwordCreation} = useValidation();
    const {t} = useTranslation();
    const {token} = useParams();

    const [confirmRegistration, {loading, data}] = useMutation(CONFIRM_REGISTRATION, {variables: {token}});

    const submit = ({password}) => confirmRegistration({variables: {password}});

    if(data)
        return <Redirect to="/settings"/>;

    return <Form onSubmit={submit} validate={passwordCreation}>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>
            <Row>
                <label htmlFor="password">{t('Password format')}</label>
                <Field name="password">{({input, meta: {error}}) => (
                    <StyledInput id="password" password legend={t('password')} error={input.value && error} {...input}/>
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