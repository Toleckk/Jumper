import React from 'react';
import Logo from "./atoms/Logo";
import Header from "../atoms/Header";
import Authorization from "./AuthorizationForm";
import Registration from "./Registration";
import local from "../../../../local";
import Divider from "../atoms/Divider";

const AuthorizationPage = () => <>
    <Logo src="" alt=""/>
    <Header>{local.info.header}</Header>
    <span>{local.info.login}</span>
    <Divider/>
    <Authorization/>
    <Divider/>
    <Registration/>
</>;

export default AuthorizationPage;