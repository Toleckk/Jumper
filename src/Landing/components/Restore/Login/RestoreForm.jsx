import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";
import {useMutation} from "@apollo/react-hooks";
import {CREATE} from "../../../mutations/restore";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({login}) => {
    console.log(login);
    return {login: !login || !login.length}
};

const RestoreForm = () => {
    const {t} = useLocalizationContext();
    const [createRestore] = useMutation(CREATE);
    const submit = data => createRestore({variables: {email: data.login}});

    return <StyledForm onSubmit={submit} validate={validate} resetFieldErrorOnChange>{({onChange, updateState, errors}) => (
        <>
            <StyledInput name="login"
                         legend={t('login')}
                         onChange={onChange}
                         onBlur={updateState}
                         error={errors.login}
                         regex={loginPattern}
            />
            <StyledButton type="submit">{t('next')}</StyledButton>
        </>
    )}</StyledForm>;
};

export default React.memo(RestoreForm);