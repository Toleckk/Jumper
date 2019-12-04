import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import Authorization from "./AuthorizationForm";
import Registration from "./Registration";
import {MainPageTemplate} from "../templates"

const AuthorizationPage = () => {
    const {authorization} = useLocalizationContext();

    return <MainPageTemplate
            header={authorization.header}
            description={authorization.login}
            content={Authorization}
            footer={Registration}
        />
};

export default React.memo(AuthorizationPage);