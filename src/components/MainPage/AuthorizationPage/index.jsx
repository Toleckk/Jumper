import React from 'react';
import Logo from "./Logo";
import Header from "./Header";
import Authorization from "./Authorization/Authorization";
import Registration from "./Registration";
import local from "../../../local";

const AuthorizationPage = () => <>
    <Logo src="" alt=""/>
    <Header>{local.info.header}</Header>
    <span>{local.info.login}</span>
    <Authorization/>
    <Registration/>
</>;

export default AuthorizationPage;