import React, {useCallback} from 'react';
import {Field} from "react-final-form";
import mem from "mem";
import {useApolloClient} from "@apollo/react-hooks";
import {useTranslation} from "Common/contexts/Localization";
import useValidation from "Common/hooks/useValidation";
import {CAN_REGISTER} from "Common/apollo/entities/registration";
import {StyledInput, Row} from "../atoms";

const EmailField = () => {
    const {t} = useTranslation();
    const client = useApolloClient();
    const {email: emailPattern} = useValidation();

    const validateEmail = useCallback(mem(async email => {
        if (!email)
            return true;

        if (!emailPattern.test(email))
            return 'Should be correct email';

        const {data} = await client.query({
            query: CAN_REGISTER,
            variables: {data: {email}}
        });
        return !data.canRegister && 'Email is already in use';
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