import React from 'react';
import Header from "../../atoms/Header";
import local from "../../../../../local";
import Text from "../atoms/Text";
import Divider from "../../atoms/Divider";
import EmailForm from "./EmailForm";

const Email = () => <>
    <Header>{local.registration.one.header}</Header>
    <Text>{local.registration.one.info}</Text>
    <Divider/>
    <EmailForm/>
</>;

export default React.memo(Email);