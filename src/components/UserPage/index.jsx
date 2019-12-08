import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {useParams} from "react-router-dom";
import {USER} from "apollo/requests/user";
import {BigLoader} from "components/Common/molecules";
import Container from "./atoms/Container";

const UserPage = () => {
    const {nickname} = useParams();
    const {loaded, data} = useQuery(USER, {variables: {nickname}});

    if (loaded || !data)
        return <BigLoader/>;

    return <Container>{data.user.nickname}</Container>;
};

export default React.memo(UserPage);