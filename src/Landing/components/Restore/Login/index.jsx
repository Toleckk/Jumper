import React from 'react';
import {useLocalizationContext} from "Common/contexts/Localization";
import StyledSpan from "../atoms/StyledSpan";
import RestoreForm from "./RestoreForm";
import {MainPageTemplate} from "../../templates";

const Login = () => {
    const {t} = useLocalizationContext();

    return <MainPageTemplate
        withLastDivider
        header={t('Enter data for restore')}
        description={t('Restore action')}
        content={() => <>
            <StyledSpan>{t('Enter your login')}</StyledSpan>
            <RestoreForm/>
        </>}
    />;
};

export default React.memo(Login);