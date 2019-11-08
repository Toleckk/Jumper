import React from 'react';
import Container from "./Container";
import Button from "../../../../molecules/Button";
import local from "../../../../../local";
import Link from "./Link";

const Registration = () => <Container>
    <span>{local.info.signUp}</span>
    <Link to={'/registration'}>
        <Button>{local.info.signUpButton}</Button>
    </Link>
</Container>;

export default Registration;