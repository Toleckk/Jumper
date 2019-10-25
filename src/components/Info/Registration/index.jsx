import React from 'react';
import Container from "./Container";
import Button from "../../atoms/Button";
import local from "../../../local";

const Registration = () => <Container>
    <span>{local.info.signUp}</span>
    <Button>{local.info.signUpButton}</Button>
</Container>;

export default Registration;