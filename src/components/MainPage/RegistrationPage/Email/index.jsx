import React from 'react';
import Header from "../../Header";
import local from "../../../../local";
import Text from "../Text";
import Divider from "../../Divider";
import Registration from "./EmailForm";

const Email = () => <>
    <Header>{local.registration.one.header}</Header>
    <Text>{local.registration.one.info}</Text>
    <Divider/>
    <Registration/>
</>;

export default Email;