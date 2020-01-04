import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {Form, Field} from "react-final-form";
import {useHistory} from "react-router-dom";
import {useTranslation} from "Common/contexts/Localization";
import useValidation from "Common/hooks/useValidation";
import {Loader} from "Common/molecules";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import StyledInput from "../atoms/StyledInput";
import {CREATE} from "../../mutations/restore";

const RestoreForm = () => {
    const {t} = useTranslation();
    const [createRestore, {loading}] = useMutation(CREATE);
    const {login, email, nickname} = useValidation();
    const history = useHistory();

    const submit = async ({login}) => {
        if (!login)
            return {login: true};

        if (!email.test(login) && !nickname.test(login))
            return {login: 'Invalid login'};

        try {
            // TODO: state with masked email
            await createRestore({variables: {login}});
            history.push('/restore/message');
        } catch (e) {
            // TODO: error context
            return e.graphQLErrors[0].extensions;
        }
    };

    return <Form onSubmit={submit}>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>

            <Field name="login">{({input, meta: {submitFailed, dirtySinceLastSubmit, submitError}}) =>
                <StyledInput legend={t('login')}
                             regex={login}
                             {...input}
                             error={submitFailed && !dirtySinceLastSubmit && t(submitError)}
                />
            }</Field>

            <StyledButton type="submit">{t('next')}</StyledButton>
        </StyledForm>
    </>}</Form>;
};

export default React.memo(RestoreForm);