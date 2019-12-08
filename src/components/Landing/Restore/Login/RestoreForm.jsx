import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useTranslation} from "contexts/Localization";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";
import StyledSpan from "../atoms/StyledSpan";
import {restore} from "api";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login}) => ({login: !login || !login.length});

const RestoreForm = ({setLoaded}) => {
    const {t} = useTranslation();
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [errors, setErrors] = useState(false);

    const submit = data => {
        setLoaded(true);
        restore(data)
            .then(() => history.push('/restore/message'))
            .catch(e => {
                setErrors(e);
                setLoaded(false);
            });
    };

    return <StyledForm onSubmit={submit} validate={validate} resetFieldErrorOnChange>{({onChange, errors, updateState}) => (
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