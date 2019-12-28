import React, {useEffect} from 'react';
import {useMutation} from "@apollo/react-hooks";
import {CREATE} from "Landing/mutations/registration";
import {useLocalizationContext} from "Common/contexts/Localization";
import {Form} from 'Common/molecules';
import {useLoadingContext} from "Landing/contexts/LoadingContext";
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
    const [createRegistration, {error, loading}] = useMutation(CREATE);
    const {setLoading} = useLoadingContext();

    useEffect(() => {
        setLoading(loading);
    }, [loading]);

    const submit = data => createRegistration({variables: {...data}})
        .then(() => {
            /*TODO: redirect*/
        }).catch(() => {});

    // console.log(error && error.graphQLErrors[0].extensions.exception);

    return <Form onSubmit={submit} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Row>
                <label htmlFor="nickname">{t('Create nickname')}</label>
                <StyledInput id="nickname"
                             name="nickname"
                             regex={loginPattern}
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