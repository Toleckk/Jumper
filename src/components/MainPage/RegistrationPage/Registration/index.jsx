import React from 'react';
import Form from "./Form";
import {Input, Password} from "../../../atoms/Input";

const Registration = () => <Form>
    <Input placeholder="Логин..."/>
    <Input placeholder="Электронная почта..."/>
    <Password placeholder="Пароль..."/>
    <Password placeholder="Повторите пароль..."/>
</Form>;

export default Registration;