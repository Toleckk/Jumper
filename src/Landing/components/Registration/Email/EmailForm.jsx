import React from 'react';
import {useHistory} from "react-router-dom";
import {useMutation} from "@apollo/react-hooks";
import {Field, Form} from "react-final-form";
import {CREATE} from "Landing/mutations/registration";
import {useLocalizationContext} from "Common/contexts/Localization";
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import Row from "../atoms/Row";
import StyledInput from "../atoms/StyledInput";
import {Loader} from "Common/molecules";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({nickname, email}) => ({
    nickname: !nickname || !nickname.length,
    email: !email || !email.length
});

const validateNickname = () => new Promise(resolve => setTimeout(() => resolve(false), 5000));

const EmailForm = () => {
    const {t} = useLocalizationContext();
    const [createRegistration, {error, loading}] = useMutation(CREATE);
    const history = useHistory();

    const submit = data => createRegistration({variables: {...data}})
        .then(() => history.push({pathname: '/registration/message', state: {email: data.email}}));

    // console.log(error && error.graphQLErrors[0].extensions.exception)

    return <Form onSubmit={submit} validateOnBlur>{({handleSubmit}) => <>
        {loading && <Loader background={"dark"}/>}
        <StyledForm onSubmit={handleSubmit}>
            <Row>
                <label htmlFor="nickname">{t('Create nickname')}</label>
                <Field name="nickname" validate={validateNickname}>{({input, meta: {error, validating}}) =>
                    <StyledInput id="nickname"
                                 regex={loginPattern}
                                 legend={t('nickname')}
                                 {...input}
                                 error={error}
                                 loading={validating}
                    />
                }</Field>
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="email">{t('Enter email')}</label>
                <Field name="email">{({input}) =>
                    <StyledInput id="email" legend={t('email')} {...input}/>
                }</Field>
            </Row>
            <Divider/>
            <StyledButton>{t('next')}</StyledButton>
        </StyledForm>
    </>
    }</Form>
};

export default React.memo(EmailForm);