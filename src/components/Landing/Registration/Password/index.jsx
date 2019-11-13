import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Header from "../../atoms/Header";
import Text from "../atoms/Text";
import Divider from "../../atoms/Divider";
import PasswordForm from "./PasswordForm";

const Password = () => {
    const {registration: {third}} = useLocalizationContext();
    return <>
        <Header>{third.header}</Header>
        <Text>{third.info}</Text>
        <Divider/>
        <PasswordForm/>
    </>;
};

export default React.memo(Password);