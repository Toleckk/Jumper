import React from 'react';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {Form} from "react-final-form";
import {Divider} from "Common/atoms";
import {Loader} from "Common/molecules";
import {useLocalizationContext} from "Common/contexts/Localization";
import {StyledForm, StyledButton} from "../atoms";
import NicknameField from "./NicknameField";
import EmailField from "./EmailField";
import {CREATE} from "../../mutations/registration";

const EmailForm = () => {
    const {t} = useLocalizationContext();
    const [createRegistration, {error: apolloError, loading}] = useMutation(CREATE);
    const history = useHistory();

    const submit = async variables => {
        await createRegistration({variables});
        history.push({
            pathname: '/registration/message',
            state: {email: variables.email}
        });
    };

    return <Form onSubmit={submit} validateOnBlur>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>
            <NicknameField/>
            <Divider/>
            <EmailField/>
            <Divider/>
            <StyledButton>{t('next')}</StyledButton>
        </StyledForm>
    </>
    }</Form>
};

export default React.memo(EmailForm);