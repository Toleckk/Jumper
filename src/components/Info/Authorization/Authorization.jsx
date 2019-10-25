import React from 'react';
import Input from "../../atoms/Input";
import Container from "./Container";
import Button from "../../atoms/Button";


const Authorization = () => <Container>
    <Input id="login" type="email" placeholder="Login"/>
    <Input id="password" type="password" placeholder="Password"/>
    <Button id="submit">Войти</Button>
</Container>;

export default Authorization;