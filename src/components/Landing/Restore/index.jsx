import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../atoms/Header";
import Logo from "../Authorization/atoms/Logo";
import StyledSpan from "./atoms/StyledSpan";
import Divider from "../atoms/Divider";
import RestoreForm from "./RestoreForm";

const Restore = () => {
    const {restore} = useLocalizationContext();

    return <>
        <Logo/>
        <Header>{restore.header}</Header>
        <Divider/>
        <StyledSpan>{restore.info}</StyledSpan>
        <RestoreForm/>
        <Divider/>
    </>;
};

export default Restore;