import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../../atoms/Header";
import LargeSpan from "../../atoms/LargeSpan";
import Divider from "../../atoms/Divider";
import StyledSpan from "../atoms/StyledSpan";
import RestoreForm from "./RestoreForm";

const Login = () => {
    const {restore} = useLocalizationContext();

    return <>
        <Header>{restore.login.header}</Header>
        <LargeSpan>{restore.login.info}</LargeSpan>
        <Divider/>
        <StyledSpan>{restore.login.login}</StyledSpan>
        <RestoreForm/>
        <Divider/>
    </>;
};

export default React.memo(Login);