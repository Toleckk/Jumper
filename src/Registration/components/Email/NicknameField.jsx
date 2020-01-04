import React, {useCallback} from 'react';
import {Field} from "react-final-form";
import mem from "mem";
import {useLocalizationContext} from "Common/contexts/Localization";
import {client} from "Common/apollo";
import useValidation from "Common/hooks/useValidation";
import {StyledInput, Row} from "../atoms";
import {CAN_REGISTER} from "../../queries/registration";

const NicknameField = () => {
    const {t} = useLocalizationContext();
    const {nickname: nicknamePattern, login} = useValidation();

    const validateNickname = useCallback(mem(async nickname => {
        if (!nickname)
            return true;

        if(!nicknamePattern.test(nickname))
            return 'Should be more then 5 symbols';

        try {
            const {data} = await client.query({
                query: CAN_REGISTER,
                variables: {data: {nickname}}
            });

            return !data.canRegister && 'Nickname is already in use';
        } catch (error) {
            // TODO: Error context
            console.log(error);
            return true;
        }
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