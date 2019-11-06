import React from 'react';
import Form from "./Form";
import StyledButton from "./StyledButton";
import Divider from "../../../Divider";
import Row from "./Row";
import StyledInput from "./StyledInput";
import local from "../../../../../local";

const Registration = () => <Form>
    <Row>
        <label htmlFor="nickname">{local.registration.one.nickname}</label>
        <StyledInput id="nickname" placeholder={local.registration.one.nicknameLegend}/>
    </Row>
    <Divider/>
    <Row>
        <label htmlFor="email">{local.registration.one.email}</label>
        <StyledInput id="email" placeholder={local.registration.one.emailLegend}/>
    </Row>
    <Divider/>
    <StyledButton>{local.registration.nextButton}</StyledButton>
</Form>;

export default Registration;