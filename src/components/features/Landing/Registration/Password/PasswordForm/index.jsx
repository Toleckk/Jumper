import React from 'react';
import Form from '../../../../../molecules/Form';
import StyledForm from "./StyledForm";
import StyledButton from "./StyledButton";
import Divider from "../../../atoms/Divider";
import Row from "./Row";
import StyledInput from "./StyledInput";
import local from "../../../../../../local";

const validate = ({nickname, email}) => ({
    nickname: !nickname || !nickname.length,
    email: !email || !email.length
});

const Registration = () => {
    const {third, nextButton} = local.registration;

    return <Form onSubmit={console.log} validate={validate} Component={StyledForm} resetFieldErrorOnChange>{
        ({updateState, errors, onChange}) => <>
            <Row>
                <label htmlFor="password">{third.password}</label>
                <StyledInput id="password"
                             name="password"
                             password
                             legend={third.passwordLegend}
                             onBlur={updateState}
                             onChange={onChange}
                             error={errors.password}
                />
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="confirm">{third.confirm}</label>
                <StyledInput id="confirm"
                             name="confirm"
                             legend={third.confirmLegend}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.confirm}
                />
            </Row>
            <Divider/>
            <StyledButton>{nextButton}</StyledButton>
        </>
    }</Form>;
};

export default React.memo(Registration);