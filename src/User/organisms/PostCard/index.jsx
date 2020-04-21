import React from 'react';
import {Flex} from "Common/atoms";
import {Avatar, Nickname} from "../../atoms";
import {PostAction} from "../../molecules";
import {ActionsContainer, AvatarContainer, Container, PostContent, PostData} from "./containers";

const PostCard = () => {
    return <Container>
        <Flex align="center" as="header">
            <AvatarContainer>
                <Avatar size="small" src="https://sun9-43.userapi.com/c200424/v200424953/1e259/MyugC_Gkpg8.jpg"/>
            </AvatarContainer>
            <Nickname size="small">ansunrisein</Nickname>
            <PostData datetime="2020-01-31">31.01.2020</PostData>
        </Flex>
        <PostContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        </PostContent>
        <ActionsContainer>
            <PostAction icon="view" count="150K"/>
            <PostAction icon="comment" count="150K"/>
            <PostAction icon="share" count="150K"/>
            <PostAction icon="love" count="150K"/>
        </ActionsContainer>
    </Container>;
};

export default React.memo(PostCard);