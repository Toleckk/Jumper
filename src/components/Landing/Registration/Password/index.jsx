import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import PasswordForm from "./PasswordForm";
import {MainPageTemplate} from "../../templates"

const Password = () => {
    const {t} = useLocalizationContext();

    return <MainPageTemplate header={t('Create password')} description={t('Almost created')} content={PasswordForm}/>;
};

export default React.memo(Password);