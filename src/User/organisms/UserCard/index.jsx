import React, {useContext} from 'react'
import Type from 'prop-types'
import {ThemeContext} from 'styled-components'
import ReactVisibilitySensor from 'react-visibility-sensor'
import {Flex} from 'Common/atoms'
import {useTranslation} from 'Common/contexts/Localization'
import {Avatar, Icon, Nickname} from '../../atoms'
import {ActionButtons, AdditionalDescription, Description, UsersIntersection} from '../../molecules'
import {
    ActionsContainer,
    CategoryText,
    Container,
    DetailsContainer,
    NicknameContainer,
    NumberStatisticContainer,
    UserStatContainer,
} from './containers'

const UserCard = ({user, onHide}) => {
    const {primaryText} = useContext(ThemeContext);
    const {t} = useTranslation();

    return <Container>
        <Flex>
            <Avatar src={user.avatar} border hover/>
            <DetailsContainer>
                <UserStatContainer>
                    <Flex direction="column" align="center">
                        <CategoryText>{t('Posts')}</CategoryText>
                        <NumberStatisticContainer tabIndex="1">
                            {user.postsCount}
                            <Icon icon="post" size='0.9em' color={`rgba(${primaryText}, 0.85)`}/>
                        </NumberStatisticContainer>
                    </Flex>
                    <Flex direction="column" align="center">
                        <CategoryText>{t('Reads')}</CategoryText>
                        <NumberStatisticContainer tabIndex="2">
                            {user.subscribesCount}
                            <Icon icon="user" size='1em' color={`rgba(${primaryText}, 0.85)`}/>
                        </NumberStatisticContainer>
                    </Flex>
                    <Flex direction="column" align="center">
                        <CategoryText>{t('Read')}</CategoryText>
                        <NumberStatisticContainer tabIndex="3">
                            {user.subscribersCount}
                            <Icon icon="user" size='1em' color={`rgba(${primaryText}, 0.85)`}/>
                        </NumberStatisticContainer>
                    </Flex>
                </UserStatContainer>
                {
                    user.followsIntersection && user.followsIntersection.length && user.followsIntersectionCount ? (
                        <UsersIntersection users={user.followsIntersection}
                                           count={user.followsIntersectionCount}
                                           tabIndex="4"
                        />
                    ) : undefined
                }
            </DetailsContainer>
        </Flex>
        <NicknameContainer>
            <Nickname>{user.nickname}</Nickname>
        </NicknameContainer>
        {user.description.about && <Description description={user.description.about}/>}
        {(user.description.birthday || user.description.from) && <AdditionalDescription user={user}/>}
        <ReactVisibilitySensor onChange={onHide} partialVisibility intervalCheck={false} scrollCheck
                               scrollDelay={10}
                               offset="54">
            <ActionsContainer>
                <ActionButtons user={user}/>
            </ActionsContainer>
        </ReactVisibilitySensor>
    </Container>
}

UserCard.propTypes = {
    onHide: Type.func.isRequired,
    user: Type.shape({
        nickname: Type.string.isRequired,
        avatar: Type.string,
        private: Type.bool.isRequired,
        postsCount: Type.number.isRequired,
        subscribersCount: Type.number.isRequired,
        subscribesCount: Type.number.isRequired,
        registration: Type.string.isRequired,
        followsIntersectionCount: Type.number,
        followsIntersection: Type.arrayOf(Type.shape({avatar: Type.string.isRequired})),
        description: Type.shape({
            about: Type.string,
            birthday: Type.string,
            from: Type.string,
        }).isRequired,
        isReadByMe: Type.bool.isRequired,
        isSubscribePending: Type.bool.isRequired,
    }).isRequired,
}

export default React.memo(UserCard)