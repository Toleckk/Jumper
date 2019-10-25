import React from 'react';
import Input from "../../../atoms/Input";
import Container from "./Container";
import Button from "../../../atoms/Button";
import local from "../../../../local";

const Authorization = () => <Container>
    <Input id="login" placeholder={local.info.loginInputPlaceholder}/>
    <Input id="password" type="password" placeholder={local.info.passwordInputPlaceholder}/>
    <Button id="submit">Войти</Button>
</Container>;

export default Authorization;