import React from 'react';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {Form} from "react-final-form";
import {CREATE} from "Landing/mutations/registration";
import {useLocalizationContext} from "Common/contexts/Localization";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import {Loader} from "Common/molecules";
import NicknameField from "./NicknameField";
import EmailField from "./EmailField";

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