import React from 'react';
import {useTranslation} from "Common/contexts/Localization";
import PasswordForm from "./PasswordForm";
import {Landing} from "Common/templates"

const Password = () => {
    const {t} = useTranslation();

    return <Landing header={t('Create password')} description={t('Almost created')} content={PasswordForm}/>;
};

export default React.memo(Password);