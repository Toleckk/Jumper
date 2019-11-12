import React from 'react';
import Form from '../../../../molecules/Form';
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import Row from "../atoms/Row";
import StyledInput from "../atoms/StyledInput";
import {useLocalizationContext} from "../../../../../contexts/Localization";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const validate = ({nickname, email}) => ({
    nickname: !nickname || !nickname.length,
    email: !email || !email.length
});

const EmailForm = () => {
    const {registration: {one, nextButton}} = useLocalizationContext();

    return <Form onSubmit={console.log} validate={validate} as={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Row>
                <label htmlFor="nickname">{one.nickname}</label>
                <StyledInput id="nickname"
                             name="nickname"
                             pattern={loginPattern}
                             legend={one.nicknameLegend}
                             onBlur={updateState}
                             onChange={onChange}
                             error={errors.nickname}
                />
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="email">{one.email}</label>
                <StyledInput id="email"
                             name="email"
                             legend={one.emailLegend}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.email}
                />
            </Row>
            <Divider/>
            <StyledButton>{nextButton}</StyledButton>
        </>
    }</Form>;
};

export default React.memo(EmailForm);