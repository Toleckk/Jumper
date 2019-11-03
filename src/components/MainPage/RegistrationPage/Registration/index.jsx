import React from 'react';
import Form from "./Form";
import StyledButton from "./StyledButton";
import Input from "../../../atoms/Input";

const Registration = () => <Form>
    <Input placeholder="Ник..."/>
    <Input placeholder="Электронная почта..."/>
    <Input placeholder="Пароль..."/>
    <Input placeholder="Повторите пароль..."/>
    <StyledButton>Зарегистрироваться</StyledButton>
</Form>;

export default Registration;