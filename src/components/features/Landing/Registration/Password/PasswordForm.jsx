import React from 'react';
import Form from '../../../../molecules/Form';
import StyledForm from "../atoms/StyledForm";
import StyledButton from "../atoms/StyledButton";
import Divider from "../../atoms/Divider";
import Row from "../atoms/Row";
import StyledInput from "../atoms/StyledInput";
import {useLocalizationContext} from "../../../../../contexts/Localization";

const isValidPassword = text => (
    /[a-z]+/.test(text) && /[A-Z]+/.test(text) && /\d/.test(text) && text.length >= 8 && text.length <= 50
);

const validate = ({password, confirm}) => ({
    password: !password || !password.length || !isValidPassword(password),
    confirm: !confirm || !confirm.length || confirm === password,
});

const validateOnChange = ({password, confirm}) => ({
    password: password && password.length && !isValidPassword(password),
    confirm: confirm && confirm.length && password !== confirm,
});

const PasswordForm = () => {
    const {registration: {third}, nextButton} = useLocalizationContext();

    return <Form as={StyledForm}
                 onSubmit={console.log}
                 validate={validate}
                 validateOnChange={validateOnChange}
                 resetFieldErrorOnChange
    >{({updateState, errors, onChange}) => (
        <>
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
                             password
                             legend={third.confirmLegend}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.confirm}
                />
            </Row>
            <Divider/>
            <StyledButton>{nextButton}</StyledButton>
        </>
    )}</Form>;
};

export default React.memo(PasswordForm);