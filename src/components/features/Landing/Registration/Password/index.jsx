import React from 'react';
import Header from "../../atoms/Header";
import local from "../../../../../local";
import Text from "../atoms/Text";
import Divider from "../../atoms/Divider";
import PasswordForm from "./PasswordForm";

const Password = () => <>
    <Header>{local.registration.third.header}</Header>
    <Text>{local.registration.third.info}</Text>
    <Divider/>
    <PasswordForm/>
</>;

export default React.memo(Password);