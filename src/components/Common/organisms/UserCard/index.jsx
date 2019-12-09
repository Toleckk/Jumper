import React, {useState} from "react";
import Type from "prop-types";
import {useQuery} from "@apollo/react-hooks";
import {ME} from "apollo/actions/user";
import {useTranslation} from "contexts/Localization";
import {Flex} from "components/Common/atoms";
import {Loader} from "components/Common/molecules";
import {StyledForm, SubmitButton} from "./atoms";
import {About, Avatar, Counts, Description, EditIcon, Nickname, RegistrationDate} from "./molecules";

const UserCard = ({user}) => {
    const {t} = useTranslation();

    const [editMode, setEditMode] = useState(false);
    const enterEditMode = () => setEditMode(true);
    const leaveEditMode = () => setEditMode(false);

    const [hovered, setHover] = useState(false);
    const setHovered = () => setHover(true);
    const setUnhovered = () => setHover(false);

    const {data, loaded} = useQuery(ME);

    if (loaded || !data)
        return <StyledForm>{() => <Loader/>}</StyledForm>;

    const isMyProfile = data.me.nickname === user.nickname;

    return <StyledForm onMouseEnter={setHovered} onMouseLeave={setUnhovered}>{() => <>
        <Flex>
            <Avatar src={user.avatar} alt={''} editMode={editMode}/>
            <Flex direction="column" align="center" style={{flex: 1}} justify="center">
                <Nickname nickname={user.nickname} editMode={editMode}>
                    {isMyProfile && !editMode && hovered && <EditIcon onClick={enterEditMode}/>}
                </Nickname>
                <Description from={user.description.from} age={user.description.age} editMode={editMode}/>
            </Flex>
        </Flex>
        <About about={user.description.about} editMode={editMode}/>
        <Counts user={user}/>
        {editMode
            ? <SubmitButton onClick={leaveEditMode}>{t('Ok')}</SubmitButton>
            : <RegistrationDate date={user.registration}/>
        }
    </>}</StyledForm>;
};

UserCard.propTypes = {
    user: Type.shape({
        nickname: Type.string.isRequired,
        avatar: Type.string,
        subscribersCount: Type.number.isRequired,
        subscribesCount: Type.number.isRequired,
        postsCount: Type.number.isRequired,
        description: Type.shape({
            age: Type.number,
            from: Type.string,
            about: Type.string
        }).isRequired
    }).isRequired
};

export default React.memo(UserCard);