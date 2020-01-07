import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import PasswordForm from "./PasswordForm";
import {MainContent} from "../../../../templates";

const Password = () => {
    const {t} = useTranslation();

    return <MainContent header={t('Create password')} description={t('Almost created')} content={PasswordForm}/>;
};

export default React.memo(Password);