import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import PasswordForm from "./PasswordForm";
import StyledSpan from "../atoms/StyledSpan";
import MainPageTemplate from "../../templates/MainPageTemplate";

const Password = () => {
    const {restore} = useLocalizationContext();

    return <MainPageTemplate
        withLastDivider
        header={restore.password.header}
        description={restore.password.info}
        content={() => <>
            <StyledSpan>{restore.password.password}</StyledSpan>
            <PasswordForm/>
        </>}
    />;
};

export default React.memo(Password);