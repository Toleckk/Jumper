import React from 'react';
import {useTranslation} from "contexts/Localization";
import Authorization from "./AuthorizationForm";
import Registration from "./Registration";
import {MainPageTemplate} from "../templates"

const AuthorizationPage = () => {
    const {t} = useTranslation();

    return <MainPageTemplate
            header={t('Let people know about your thoughts')}
            description={t('Log in to account')}
            content={Authorization}
            footer={Registration}
        />
};

export default React.memo(AuthorizationPage);