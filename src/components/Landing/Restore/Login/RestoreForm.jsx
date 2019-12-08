import React from 'react';
import {useTranslation} from "contexts/Localization";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";
import StyledSpan from "../atoms/StyledSpan";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login}) => ({login: !login || !login.length});

const RestoreForm = () => {
    const {t} = useTranslation();

    return <StyledForm onSubmit={console.log} validate={validate} resetFieldErrorOnChange>{({onChange, errors}) => (
        <>
            <StyledSpan>{t('Enter your login')}</StyledSpan>
            <StyledInput name="login"
                         legend={t('login')}
                         onChange={onChange}
                         onBlur={updateState}
                         error={errors.login}
                         pattern={loginPattern}
            />
            <StyledButton type="submit">{t('next')}</StyledButton>
        </>
    )}</StyledForm>;
};

export default React.memo(RestoreForm);