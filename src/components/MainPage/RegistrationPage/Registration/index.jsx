import React from 'react';
import Form from "./Form";
import {Input} from "../../../atoms/Input";
import StyledButton from "./StyledButton";

const Registration = () => <Form>
    <Input placeholder="Ник..."/>
    <Input placeholder="Электронная почта..."/>
    <Input placeholder="Пароль..."/>
    <Input placeholder="Повторите пароль..."/>
    <StyledButton>Зарегистрироваться</StyledButton>
</Form>;

export default Registration;