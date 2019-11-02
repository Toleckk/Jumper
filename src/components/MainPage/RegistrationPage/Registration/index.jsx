import React from 'react';
import Form from "./Form";
import StyledButton from "./StyledButton";

const Registration = () => <Form>
    <Input placeholder="Логин..."/>
    <Input placeholder="Электронная почта..."/>
    <Password placeholder="Пароль..."/>
    <Password placeholder="Повторите пароль..."/>
    <StyledButton>Зарегистрироваться</StyledButton>
</Form>;

export default Registration;