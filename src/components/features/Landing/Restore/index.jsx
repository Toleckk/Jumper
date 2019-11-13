import React from 'react';
import Header from "../atoms/Header";
import Input from "../../../molecules/Input";
import StyledForm from "./StyledForm";
import {useLocalizationContext} from "../../../../contexts/Localization";
import Logo from "../Authorization/atoms/Logo";
import StyledSpan from "./StyledSpan";
import Button from "../../../molecules/Button";

const Restore = () => {
    const {info, restore} = useLocalizationContext();

    return <>
        <Logo/>
        <Header>{restore.header}</Header>
        <StyledSpan>{restore.info}</StyledSpan>
        <StyledForm>
            <Input id="login" legend={info.loginInputPlaceholder}/>
            <Button>Далее</Button>
        </StyledForm>
    </>;
};

export default Restore;