import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Logo from "./atoms/Logo";
import Header from "../atoms/Header";
import Authorization from "./AuthorizationForm";
import Registration from "./Registration";
import Divider from "../atoms/Divider";

const AuthorizationPage = () => {
    const {info} = useLocalizationContext();
    return <>
        <Logo src="" alt=""/>
        <Header>{info.header}</Header>
        <span>{info.login}</span>
        <Divider/>
        <Authorization/>
        <Divider/>
        <Registration/>
    </>;
};

export default React.memo(AuthorizationPage);