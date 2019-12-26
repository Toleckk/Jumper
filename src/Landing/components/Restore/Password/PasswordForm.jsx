import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import StyledButton from "../atoms/StyledButton";
import StyledForm from "../atoms/StyledForm";
import StyledInput from "../atoms/StyledInput";

const isValidPassword = text => (
    /[a-z]+/.test(text) && /[A-Z]+/.test(text) && /\d/.test(text) && text.length >= 8 && text.length <= 50
);

const validate = ({password, confirm}) => ({
    password: !password || !password.length || !isValidPassword(password),
    confirm: !confirm || !confirm.length || confirm === password,
});

const validateOnChange = ({password, confirm}) => ({
    password: password && password.length && !isValidPassword(password),
    confirm: confirm && confirm.length && password !== confirm,
});

const PasswordForm = () => {
    const {t} = useLocalizationContext();

    return <StyledForm onSubmit={console.log}
                 validate={validate}
                 validateOnChange={validateOnChange}
                 resetFieldErrorOnChange
    >{({updateState, errors, onChange}) => (
        <>
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
    )}</StyledForm>;
};

export default React.memo(PasswordForm);