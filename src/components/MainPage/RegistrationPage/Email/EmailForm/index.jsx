import React from 'react';
import Form from '../../../../atoms/Form';
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Divider from "../../../Divider";
import Row from "./Row";
import StyledInput from "./StyledInput";
import local from "../../../../../local";

const validate = ({nickname, email}) => ({
    nickname: !nickname || !nickname.length,
    email: !email || !email.length
});

const Registration = () => {
    const {one, nextButton} = local.registration;

    return <Form onSubmit={console.log} validate={validate} Component={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Row>
                <label htmlFor="nickname">{one.nickname}</label>
                <StyledInput id="nickname"
                             name="nickname"
                             placeholder={one.nicknameLegend}
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
                             placeholder={one.emailLegend}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.email}
                />
            </Row>
            <Divider/>
            <StyledButton> {nextButton}</StyledButton>
        </>
    }</Form>;
};

export default Registration;