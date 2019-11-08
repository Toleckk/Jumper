import React from 'react';
import Header from "../../atoms/Header";
import local from "../../../../../local";
import Text from "../atoms/Text";
import Divider from "../../atoms/Divider";
import Registration from "./EmailForm";

const Email = () => <>
    <Header>{local.registration.one.header}</Header>
    <Text>{local.registration.one.info}</Text>
    <Divider/>
    <Registration/>
</>;

export default React.memo(Email);