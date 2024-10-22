import React from 'react';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {Form} from "react-final-form";
import {Divider} from "Common/atoms";
import {Loader} from "Common/molecules";
import {useTranslation} from "Common/contexts/Localization";
import {CREATE_REGISTRATION} from "Common/apollo/entities/registration";
import {StyledForm, StyledButton} from "../atoms";
import NicknameField from "./NicknameField";
import EmailField from "./EmailField";

const EmailForm = () => {
    const {t} = useTranslation();
    const [createRegistration, {loading}] = useMutation(CREATE_REGISTRATION);
    const history = useHistory();

    const submit = async variables => {
        await createRegistration({variables});
        history.push({
            pathname: '/landing/registration/message',
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