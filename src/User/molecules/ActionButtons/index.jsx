import React, {useContext, useMemo, useCallback} from 'react'
import {useTranslation} from 'Common/contexts/Localization'
import {ThemeContext} from 'styled-components'
// import {Icon} from '../../atoms'
import Container from './Container'
// import IconButton from './IconButton'
import TextButton from './TextButton'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {SUBSCRIBE, UNSUBSCRIBE} from 'Common/apollo/entities/subscribe'
import {GET_USER, ME} from 'Common/apollo/entities/user'

const ActionButtons = ({user}) => {
    const {t} = useTranslation()
    const theme = useContext(ThemeContext)
    const {data: {me}} = useQuery(ME)

    const options = useMemo(() => ({
        variables: {
            account: user.nickname,
        }, refetchQueries: [{
            query: GET_USER,
            variables: {nickname: user.nickname},
        }],
        awaitRefetchQueries: true,
    }), [user])

    const [unsubscribe, {loading: unsubscribing}] = useMutation(UNSUBSCRIBE, options)
    const [subscribe, {loading: subscribing}] = useMutation(SUBSCRIBE, options)

    const onClick = useCallback(() => user.isReadByMe ? unsubscribe() : subscribe(), [user, subscribe, unsubscribe])

    if (!me || me.nickname === user.nickname)
        return ''

    return <Container>
        <TextButton
            onClick={onClick}
            disabled={unsubscribing || subscribing}
        >
            {user.isReadByMe ? 'Не читать' : t('Follow')}
        </TextButton>
        {/*<IconButton>*/}
        {/*    <Icon icon="message" color={`rgb(${theme.primaryText})`}/>*/}
        {/*</IconButton>*/}
        {/*<IconButton>*/}
        {/*    <Icon icon="more" color={`rgb(${theme.primaryText})`}/>*/}
        {/*</IconButton>*/}
    </Container>
}

export default React.memo(ActionButtons)