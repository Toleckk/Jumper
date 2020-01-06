import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {Form, Field} from "react-final-form";
import {useHistory} from "react-router-dom";
import {useTranslation} from "Common/contexts/Localization";
import useValidation from "Common/hooks/useValidation";
import {Loader} from "Common/molecules";
import {StyledForm, StyledInput, StyledButton} from "../atoms";
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
            const {data} = await createRestore({variables: {login}});
            history.push({
                pathname: '/restore/message',
                state: {email: data.createRestore}
            });
        } catch (e) {
            if(e.graphQLErrors && e.graphQLErrors.length && e.graphQLErrors[0].message === 'User does not exist')
                return {login: 'User does not exist'};

            if(!e.networkError)
                throw e;
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