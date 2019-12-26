import React from 'react';
import {useParams} from 'react-router-dom';
import {useMutation} from "@apollo/react-hooks";
import {useLocalizationContext} from "Common/contexts/Localization";
import {Form} from 'Common/molecules';
import {CONFIRM} from "Landing/mutations/registration";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import Row from "../atoms/Row";
import StyledInput from "../atoms/StyledInput";

const isValidPassword = text => (
    /[a-z]+/.test(text) && /[A-Z]+/.test(text) && /\d/.test(text) && text.length >= 8 && text.length <= 50
);

const validate = ({password, confirm}) => ({
    password: !password || !password.length || !isValidPassword(password),
    confirm: !confirm || !confirm.length || confirm !== password,
});

const validateOnChange = ({password, confirm}) => ({
    password: password && password.length && !isValidPassword(password),
    confirm: confirm && confirm.length && password !== confirm,
});

const PasswordForm = () => {
    const {t} = useLocalizationContext();
    const {token} = useParams();

    const [confirmRegistration] = useMutation(CONFIRM, {variables: {token}});
    const submit = ({password}) => confirmRegistration({variables: {password}});

    return <Form as={StyledForm}
                 onSubmit={submit}
                 validate={validate}
                 validateOnChange={validateOnChange}
                 resetFieldErrorOnChange
    >{({updateState, errors, onChange}) => (
        <>
            <Row>
                <label htmlFor="password">{t('Password format')}</label>
                <StyledInput id="password"
                             name="password"
                             password
                             legend={t('password')}
                             onBlur={updateState}
                             onChange={onChange}
                             error={errors.password}
                />
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="confirm">{t('Enter password again')}</label>
                <StyledInput id="confirm"
                             name="confirm"
                             password
                             legend={t('Confirm password')}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.confirm}
                />
            </Row>
            <Divider/>
            <StyledButton>{t('next')}</StyledButton>
        </>
    )}</Form>;
};

export default React.memo(PasswordForm);