import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import PasswordForm from "./PasswordForm";
import {Landing} from "Common/templates"

const Password = () => {
    const {t} = useLocalizationContext();

    return <Landing header={t('Create password')} description={t('Almost created')} content={PasswordForm}/>;
};

export default React.memo(Password);