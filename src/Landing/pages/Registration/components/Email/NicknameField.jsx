import React, {useCallback} from 'react';
import {Field} from "react-final-form";
import mem from "mem";
import {useApolloClient} from "@apollo/react-hooks";
import {useTranslation} from "Common/contexts/Localization";
import useValidation from "Common/hooks/useValidation";
import {CAN_REGISTER} from "Common/apollo/entities/registration";
import {StyledInput, Row} from "../atoms";

const NicknameField = () => {
    const {t} = useTranslation();
    const client = useApolloClient();
    const {nickname: nicknamePattern, login} = useValidation();

    const validateNickname = useCallback(mem(async nickname => {
        if (!nickname)
            return true;

        if (!nicknamePattern.test(nickname))
            return 'Should be more then 5 symbols';

        const {data} = await client.query({
            query: CAN_REGISTER,
            variables: {data: {nickname}}
        });

        return !data.canRegister && 'Nickname is already in use';
    }), []);

    return <Row>
        <label htmlFor="nickname">{t('Create nickname')}</label>
        <Field name="nickname" validate={validateNickname} validateFields={[]}>{
            ({input, meta: {error, validating, submitFailed}}) => (
                <StyledInput id="nickname"
                             regex={login}
                             legend={t('nickname')}
                             {...input}
                             error={!submitFailed && error === true ? false : t(error)}
                             loading={validating}
                />
            )
        }</Field>
    </Row>;
};

export default React.memo(NicknameField);