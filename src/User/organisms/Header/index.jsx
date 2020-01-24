import React from 'react';
import Type from "prop-types";
import {Flex} from "Common/atoms";
import {Nickname, Avatar} from "../../atoms";
import {ActionButtons} from "../../molecules";
import Container from "./Container";
import ActionButtonsContainer from "./ActionButtonsContainer";
import AvatarContainer from "./AvatarContainer";

const Header = ({user}) => <Container>
    <Flex align="center">
        <AvatarContainer>
            <Avatar src={user.avatar} alt="" size="header"/>
        </AvatarContainer>
        <Nickname>{user.nickname}</Nickname>
    </Flex>
    <ActionButtonsContainer>
        <ActionButtons/>
    </ActionButtonsContainer>
</Container>;

Header.propTypes = {
    user: Type.shape({
        avatar: Type.string.isRequired,
        nickname: Type.string.isRequired,
    })
};

export default React.memo(Header);