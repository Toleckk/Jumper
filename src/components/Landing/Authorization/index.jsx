import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Logo from "./atoms/Logo";
import Header from "../atoms/Header";
import Authorization from "./AuthorizationForm";
import Registration from "./Registration";
import Divider from "../atoms/Divider";
import LargeSpan from "../atoms/LargeSpan";

const AuthorizationPage = () => {
    const {authorization} = useLocalizationContext();
    return <>
        <Logo src="" alt=""/>
        <Header>{authorization.header}</Header>
        <LargeSpan>{authorization.login}</LargeSpan>
        <Divider/>
        <Authorization/>
        <Divider/>
        <Registration/>
    </>;
};

export default React.memo(AuthorizationPage);