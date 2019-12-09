import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {useParams} from "react-router-dom";
import {USER} from "apollo/requests/user";
import {BigLoader} from "components/Common/molecules";
import {UserCard} from "components/Common/organisms";
import Container from "./atoms/Container";
import Posts from "./Posts";
import FlexOne from "./atoms/FlexOne";
import UserCardContainer from "./atoms/UserCardContainer";

const UserPage = () => {
    const {nickname} = useParams();
    const {loaded, data} = useQuery(USER, {variables: {nickname}});

    if (loaded || !data)
        return <BigLoader/>;

    return <Container>
        <FlexOne>
            <UserCardContainer>
                <UserCard user={data.user}/>
            </UserCardContainer>
        </FlexOne>
        <Posts/>
        <FlexOne>
            <div></div>
        </FlexOne>
    </Container>;
};

export default React.memo(UserPage);