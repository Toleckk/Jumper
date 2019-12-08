import React from 'react';
import {useTranslation} from "contexts/Localization";
import AuthorizationForm from "./AuthorizationForm";
import Registration from "./Registration";
import {MainPageTemplate} from "../templates"

const AuthorizationPage = () => {
    const {t} = useTranslation();

    return <MainPageTemplate
            header={t('Let people know about your thoughts')}
            description={t('Log in to account')}
            content={AuthorizationForm}
            footer={Registration}
        />
};

export default React.memo(AuthorizationPage);