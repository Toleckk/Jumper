import React from 'react';
import {useTranslation} from "contexts/Localization";
import PasswordForm from "./PasswordForm";
import {MainPageTemplate} from "../../templates"

const Password = () => {
    const {t} = useTranslation();

    return <MainPageTemplate header={t('Create password')} description={t('Almost created')} content={PasswordForm}/>;
};

export default React.memo(Password);