import React, {useCallback} from 'react';
import {Field} from "react-final-form";
import mem from "mem";
import {useLocalizationContext} from "Common/contexts/Localization";
import {client} from "Common/apollo";
import StyledInput from "../atoms/StyledInput";
import Row from "../atoms/Row";
import {CAN_REGISTER} from "../../queries/registration";

const EmailField = () => {
    const {t} = useLocalizationContext();

    const validateEmail = useCallback(mem(async email => {
        if (!email)
            return true;

        if (!/^[-0-9.A-Za-z_]+@[A-Za-z]+\.[A-Za-z]{2,10}$/.test(email))
            return 'Should be correct email';

        try {
            const {data} = await client.query({
                query: CAN_REGISTER,
                variables: {data: {email}}
            });
            return !data.canRegister && 'Email is already in use';
        } catch (error) {
            // TODO: Error context
            console.log(error);
            return true;
        }
    }), []);

    return <Row>
        <label htmlFor="email">{t('Enter email')}</label>
        <Field name="email" validate={validateEmail} validateFields={[]}>{
            ({input, meta: {error, submitFailed, validating}}) => (
                <StyledInput id="email"
                             legend={t('email')}
                             {...input}
                             error={!submitFailed && error === true ? false : t(error)}
                             loading={validating}
                />
            )
        }</Field>
    </Row>;
};

export default React.memo(EmailField);