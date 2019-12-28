import React from 'react';
import {useMutation} from "@apollo/react-hooks";
import {CREATE} from "Landing/mutations/registration";
import {useLocalizationContext} from "Common/contexts/Localization";
import {Form} from 'Common/molecules';
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import Row from "../atoms/Row";
import StyledInput from "../atoms/StyledInput";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({nickname, email}) => ({
    nickname: !nickname || !nickname.length,
    email: !email || !email.length
});

const EmailForm = () => {
    const {t} = useLocalizationContext();

    const [createRegistration] = useMutation(CREATE);
    const submit = data => createRegistration({variables: {...data}});

    return <Form onSubmit={submit} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Row>
                <label htmlFor="nickname">{t('Create nickname')}</label>
                <StyledInput id="nickname"
                             name="nickname"
                             pattern={loginPattern}
                             legend={t('nickname')}
                             onBlur={updateState}
                             onChange={onChange}
                             error={errors.nickname}
                />
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="email">{t('Enter email')}</label>
                <StyledInput id="email"
                             name="email"
                             legend={t('email')}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.email}
                />
            </Row>
            <Divider/>
            <StyledButton>{t('next')}</StyledButton>
        </>
    }</Form>;
};

export default React.memo(EmailForm);