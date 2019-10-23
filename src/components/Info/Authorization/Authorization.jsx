import React from 'react';
import Input from "./Input";
import Container from "./Container";

const Authorization = () => <Container>
    <Input id="login" type="email" placeholder="Login"/>
    <Input id="password" type="password" placeholder="Password"/>
</Container>;

export default Authorization;