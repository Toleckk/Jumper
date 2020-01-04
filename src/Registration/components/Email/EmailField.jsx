import React, {useCallback} from 'react';
import {Field} from "react-final-form";
import mem from "mem";
import {useLocalizationContext} from "Common/contexts/Localization";
import {client} from "Common/apollo";
import {StyledInput, Row} from "../atoms";
import {CAN_REGISTER} from "../../queries/registration";
import useValidation from "../../../Common/hooks/useValidation";

const EmailField = () => {
    const {t} = useLocalizationContext();
    const {email: emailPattern} = useValidation('email');

    const validateEmail = useCallback(mem(async email => {
        if (!email)
            return true;

        if (!emailPattern.test(email))
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