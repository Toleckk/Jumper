import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import {Input} from "components/Common/molecules";
import StyledForm from "./atoms/StyledForm";
import StyledButton from "./atoms/StyledButton";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login}) => ({login: !login || !login.length});

const RestoreForm = () => {
    const {info, nextButton} = useLocalizationContext();

    return <StyledForm onSubmit={console.log} validate={validate} resetFieldErrorOnChange>{({onChange, errors}) => {
        return <>
            <Input name="login"
                   legend={info.loginInputPlaceholder}
                   onChange={onChange}
                   error={errors.login}
                   pattern={loginPattern}
            />
            <StyledButton type="submit">{nextButton}</StyledButton>
        </>;
    }}</StyledForm>;
};

export default RestoreForm;