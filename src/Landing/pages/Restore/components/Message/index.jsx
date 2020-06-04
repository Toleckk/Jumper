import React from 'react'
import {MainContent} from "Landing/templates";
import StyledSpan from "./StyledSpan"


const Message = () => (
    <MainContent
        withLastDivider
        header="Восстановление пароля"
        description="Проверьте свою почту"
        content={() => <StyledSpan>Мы отправили письмо на почту, которая привязана к вашему аккаунту. В нём содержится инструкция по завершению процедуры восстановления пароля</StyledSpan>}
    />
)

export default React.memo(Message)