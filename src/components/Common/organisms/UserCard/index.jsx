import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import Type from "prop-types";
import {useMutation} from "@apollo/react-hooks";
import {client} from "apollo";
import {ME, UPDATE_USER, USER} from "apollo/requests/user";
import {useTranslation} from "contexts/Localization";
import {Flex} from "components/Common/atoms";
import {Form} from "components/Common/molecules";
import {StyledForm, SubmitButton} from "./atoms";
import {About, Avatar, Counts, Description, EditIcon, Nickname, RegistrationDate} from "./molecules";
import Button from "../../molecules/Button";
import {logout as logoutRequest} from "api";

const UserCard = ({user, isMyAccount}) => {
    const {t} = useTranslation();
    const history = useHistory();

    const [editMode, setEditMode] = useState(false);
    const enterEditMode = () => setEditMode(true);

    const [hovered, setHover] = useState(false);
    const setHovered = () => setHover(true);
    const setUnhovered = () => setHover(false);

    const [setUser] = useMutation(UPDATE_USER);

    const submit = data => {
        if (Object.keys(data).length) {
            const updatedUser = toUser(data);
            setUser({variables: {user: updatedUser}})
                .then(async () => {
                    setEditMode(false);
                    client.query({query: ME, fetchPolicy: 'network-only'});
                    client.query({
                            query: USER, fetchPolicy: 'network-only',
                            variables: {nickname: updatedUser.nickname || user.nickname}
                        }
                    );
                })
                .catch(console.error);
        }
    };

    const logout = () => logoutRequest().then(() => history.push('/'));

    return <Form as={StyledForm} validate={() => ({})} onMouseEnter={setHovered} onMouseLeave={setUnhovered}
                 onSubmit={submit}>{({updateState}) => <>
        <Flex>
            <Avatar src={user.avatar} alt={''} editMode={editMode}/>
            <Flex direction="column" align="center" style={{flex: 1}} justify="center">
                <Nickname nickname={user.nickname} editMode={editMode} onChange={updateState}>
                    {isMyAccount && !editMode && hovered && <EditIcon onClick={enterEditMode}/>}
                </Nickname>
                <Description from={user.description.from} age={user.description.age} editMode={editMode}
                             onChange={updateState}/>
            </Flex>
        </Flex>
        <About about={user.description.about} editMode={editMode} onChange={updateState}/>
        <Counts user={user}/>
        {editMode
            ? <SubmitButton type="submit">{t('Ok')}</SubmitButton>
            : <RegistrationDate date={user.registration}/>
        }
        <Button onClick={logout}>Выйти</Button>
    </>}</Form>;
};

const toUser = data => {
    const {about, age, from} = data;
    const result = {};
    if (about || age || from) {
        result.description = {about, age, from};

        if (age)
            result.description.age = parseInt(age);
    }

    result.nickname = data.nickname;
    result.avatar = data.avatar;

    return result;
};

UserCard.propTypes = {
    isMyAccount: Type.bool.isRequired,
    user: Type.shape({
        nickname: Type.string.isRequired,
        avatar: Type.string,
        subscribersCount: Type.number.isRequired,
        subscribesCount: Type.number.isRequired,
        postsCount: Type.number.isRequired,
        description: Type.shape({
            age: Type.number,
            from: Type.string,
            about: Type.string,
        }).isRequired,
    }).isRequired,
};

export default React.memo(UserCard);