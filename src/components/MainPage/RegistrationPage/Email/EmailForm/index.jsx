import React from 'react';
import Form from "./Form";
import StyledButton from "./StyledButton";
import Divider from "../../../Divider";
import Row from "./Row";
import StyledInput from "./StyledInput";
import local from "../../../../../local";

const createOnChange = (errors, setErrors, handleChange) => event => {
    const {value, name} = event.target;

    if (value)
        setErrors({...errors, [name]: false});

    return handleChange(event);
};

const validate = ({nickname, email}) => ({
    nickname: !nickname || !nickname.length,
    email: !email || !email.length
});

const Registration = () => <Form onSubmit={console.log} validate={validate}>{
    ({updateState, errors, setErrors}) => {
        const onChange = createOnChange(errors, setErrors, updateState);
        return <>
            <Row>
                <label htmlFor="nickname">{local.registration.one.nickname}</label>
                <StyledInput id="nickname"
                             name="nickname"
                             placeholder={local.registration.one.nicknameLegend}
                             onBlur={updateState}
                             onChange={onChange}
                             error={errors.nickname}
                />
            </Row>
            <Divider/>
            <Row>
                <label htmlFor="email">{local.registration.one.email}</label>
                <StyledInput id="email"
                             name="email"
                             placeholder={local.registration.one.emailLegend}
                             onChange={onChange}
                             onBlur={updateState}
                             error={errors.email}
                />
            </Row>
            <Divider/>
            <StyledButton> {local.registration.nextButton}</StyledButton>
        </>
    }
}</Form>;

export default Registration;