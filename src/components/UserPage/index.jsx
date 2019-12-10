import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {Redirect, useParams} from "react-router-dom";
import {USER} from "apollo/requests/user";
import {BigLoader} from "components/Common/molecules";
import {UserCard} from "components/Common/organisms";
import Container from "./atoms/Container";
import Posts from "./Posts";
import FlexOne from "./atoms/FlexOne";
import UserCardContainer from "./atoms/UserCardContainer";
import {ME as STORED_ME} from "../../apollo/actions/user";

const UserPage = () => {
    const {nickname} = useParams();
    const {loaded, data: user} = useQuery(USER, {variables: {nickname}});
    const {data: me} = useQuery(STORED_ME);

    if (loaded || !user)
        return <BigLoader/>;

    const isMyAccount = me.me.nickname === user.user.nickname;

    return <Container>
        <FlexOne>
            <UserCardContainer>
                <UserCard user={user.user} isMyAccount={isMyAccount}/>
            </UserCardContainer>
        </FlexOne>
        <Posts isMyAccount={isMyAccount} nickname={user.user.nickname}/>
        <FlexOne>
            <div></div>
        </FlexOne>
    </Container>;
};

export default React.memo(UserPage);