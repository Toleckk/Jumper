import React from "react"
import {useQuery} from "@apollo/react-hooks"
import {RANDOM_USERS} from "../../Common/apollo/entities/user"
import {Loader} from "Common/molecules"
import UserCard from "../../Search/organisms/UserCard"
import Divider from "../../Common/atoms/Divider"
import SuggestionsContainer from "../atoms/SuggestionsContainer"
import SuggestionsList from "../atoms/SuggestionsList"
import EmptyUser from "Search/organisms/SearchDisplay/EmptyUser"
import StyledLink from "Landing/pages/Login/components/AuthorizationForm/StyledLink"

const Suggestions = () => {
    const {data, loading} = useQuery(RANDOM_USERS)

    if (loading)
        return <Loader/>

    return (
        <SuggestionsContainer>
            <h3>Осмотритесь вокруг, чтобы найти интересных пользователей</h3>
            <SuggestionsList>
                {data.randomUsers.map(user => <UserCard user={user} key={user.nickname}/>)}
                {Array(3 - data.randomUsers.length).fill(0).map((_, i) => <EmptyUser key={i}/>)}
            </SuggestionsList>
            <span>Если ищете что-то, Вы можете воспользоваться нашим <StyledLink to="/search">поиском</StyledLink></span>
            <Divider/>
        </SuggestionsContainer>
    )
}

export default Suggestions