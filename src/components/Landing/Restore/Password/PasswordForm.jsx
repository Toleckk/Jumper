import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {confirmRestoring} from "api";
import {useTranslation} from "contexts/Localization";
import StyledButton from "../atoms/StyledButton";
import StyledForm from "../atoms/StyledForm";
import StyledInput from "../atoms/StyledInput";
import StyledSpan from "../atoms/StyledSpan";
import {client} from "apollo";
import {ME} from "apollo/requests/user";

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

const PasswordForm = ({setLoaded}) => {
    const {t} = useTranslation();
    const {token} = useParams();
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState(false);

    const submit = ({password}) => {
        setLoaded(true);
        confirmRestoring({password, token})
            .then(() => client.query({query: ME, fetchPolicy: 'network-only'}))
            .catch(e => {
                setErrors(e);
                setLoaded(false);
            });
    };

    return (
        <StyledForm onSubmit={submit} validate={validate} validateOnChange={validateOnChange} resetFieldErrorOnChange>{
            ({updateState, errors, onChange}) => (
                <>
                    <StyledSpan>{t('Short password format')}</StyledSpan>
                    <StyledInput name="password"
                                 password
                                 legend={t('password')}
                                 onBlur={updateState}
                                 onChange={onChange}
                                 error={errors.password}
                    />
                    <StyledInput name="confirm"
                                 password
                                 legend={t('Confirm password')}
                                 onChange={onChange}
                                 onBlur={updateState}
                                 error={errors.confirm}
                    />
                    <StyledButton>{t('next')}</StyledButton>
                </>
            )
        }</StyledForm>
    );
};

export default React.memo(PasswordForm);