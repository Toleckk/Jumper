import React from 'react';
import {useTranslation} from "contexts/Localization";
import PasswordForm from "./PasswordForm";
import StyledSpan from "../atoms/StyledSpan";
import {MainPageTemplate} from "../../templates";

const Password = () => {
    const {t} = useTranslation();

    return <MainPageTemplate
        withLastDivider
        header={t('Create new password')}
        description={t('Sessions will be interrupted')}
        content={() => <>
            <StyledSpan>{t('Short password format')}</StyledSpan>
            <PasswordForm/>
        </>}
    />;
};

export default React.memo(Password);