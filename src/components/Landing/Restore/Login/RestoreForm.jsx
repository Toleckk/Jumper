import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login}) => ({login: !login || !login.length});

const RestoreForm = () => {
    const {authorization, nextButton} = useLocalizationContext();

    return <StyledForm onSubmit={console.log} validate={validate} resetFieldErrorOnChange>{({onChange, errors}) => (
        <>
            <StyledInput name="login"
                   legend={authorization.loginInputPlaceholder}
                   onChange={onChange}
                   error={errors.login}
                   pattern={loginPattern}
            />
            <StyledButton type="submit">{nextButton}</StyledButton>
        </>
    )}</StyledForm>;
};

export default React.memo(RestoreForm);