import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
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
    const {registration: {third}, nextButton} = useLocalizationContext();

    return <StyledForm onSubmit={console.log}
                 validate={validate}
                 validateOnChange={validateOnChange}
                 resetFieldErrorOnChange
    >{({updateState, errors, onChange}) => (
        <>
            <StyledInput name="password"
                         password
                         legend={third.passwordLegend}
                         onBlur={updateState}
                         onChange={onChange}
                         error={errors.password}
            />
            <StyledInput name="confirm"
                         password
                         legend={third.confirmLegend}
                         onChange={onChange}
                         onBlur={updateState}
                         error={errors.confirm}
            />
            <StyledButton>{nextButton}</StyledButton>
        </>
    )}</StyledForm>;
};

export default React.memo(PasswordForm);