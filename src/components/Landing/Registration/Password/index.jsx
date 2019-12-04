import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import PasswordForm from "./PasswordForm";
import MainPageTemplate from "../../templates/MainPageTemplate";

const Password = () => {
    const {registration: {third}} = useLocalizationContext();

    return <MainPageTemplate header={third.header} description={third.info} content={PasswordForm}/>;
};

export default React.memo(Password);