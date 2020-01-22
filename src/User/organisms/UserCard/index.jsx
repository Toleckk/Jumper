import React, {useContext} from 'react';
import Type from 'prop-types';
import {ThemeContext} from "styled-components";
import ReactVisibilitySensor from "react-visibility-sensor";
import {Flex} from "Common/atoms";
import {useTranslation} from "Common/contexts/Localization"
import {Avatar, Icon, Nickname} from "../../atoms";
import {ActionButtons, AdditionalDescription, Description, UsersIntersection} from "../../molecules";
import Container from "./Container";
import ActionsContainer from "./ActionsContainer";
import UserStatContainer from "./UserStatContainer";
import DetailsContainer from "./DetailsContainer";
import CategoryText from "./CategoryText";
import NumberStatisticContainer from "./NumberStatisticContainer";

const UserCard = ({user}) => {
    const {primaryText} = useContext(ThemeContext);
    const {t} = useTranslation();

    return <Container>
        <Flex>
            <Avatar size="big" src={user.avatar} border hover/>
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
        <Nickname>{user.nickname}</Nickname>
        <Description description={user.description.about}/>
        {(user.description.birthday || user.description.from) && <AdditionalDescription user={user}/>}
        <ReactVisibilitySensor onChange={() => console.log('a')} partialVisibility intervalCheck={false} scrollCheck>
            <ActionsContainer>
                <ActionButtons/>
            </ActionsContainer>
        </ReactVisibilitySensor>
    </Container>;
};

UserCard.propTypes = {
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
    }).isRequired,
};

export default React.memo(UserCard);