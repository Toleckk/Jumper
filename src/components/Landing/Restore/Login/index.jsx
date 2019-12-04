import React from 'react';
import {useLocalizationContext} from "contexts/Localization";
import StyledSpan from "../atoms/StyledSpan";
import RestoreForm from "./RestoreForm";
import MainPageTemplate from "../../templates/MainPageTemplate";

const Login = () => {
    const {restore} = useLocalizationContext();

    return <MainPageTemplate
        withLastDivider
        header={restore.login.header}
        description={restore.login.info}
        content={() => <>
            <StyledSpan>{restore.login.login}</StyledSpan>
            <RestoreForm/>
        </>}
    />;
};

export default React.memo(Login);