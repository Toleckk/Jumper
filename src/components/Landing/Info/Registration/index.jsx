import React from 'react';
import Container from "./Container";
import Button from "../../../atoms/Button";
import local from "../../../../local";
import Link from "./Link";

const Registration = () => <Container>
    <span>{local.info.signUp}</span>
    <Button>{local.info.signUpButton}</Button>
</Container>;

export default Registration;