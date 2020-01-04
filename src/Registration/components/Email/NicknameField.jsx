import React, {useCallback} from 'react';
import {Field} from "react-final-form";
import mem from "mem";
import {useLocalizationContext} from "Common/contexts/Localization";
import {client} from "Common/apollo";
import {StyledInput, Row} from "../atoms";
import {CAN_REGISTER} from "../../queries/registration";

const loginPattern = /^[-_0-9A-Za-z.@]*$/;

const NicknameField = () => {
    const {t} = useLocalizationContext();

    const validateNickname = useCallback(mem(async nickname => {
        if (!nickname)
            return true;

        if(!/^[A-z0-9]{5,}$/.test(nickname))
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
                             regex={loginPattern}
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