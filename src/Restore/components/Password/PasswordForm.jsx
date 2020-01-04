import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {useParams} from "react-router-dom";
import {useLocalizationContext} from "Common/contexts/Localization";
import StyledButton from "../atoms/StyledButton";
import StyledForm from "../atoms/StyledForm";
import StyledInput from "../atoms/StyledInput";
import {CONFIRM} from "../../mutations/restore";

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
    const submit = data => confirmRegistration({variables: {...data}});

    return <StyledForm onSubmit={submit}
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