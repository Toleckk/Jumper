import React, {useState} from 'react';
import {useMutation, useQuery} from "@apollo/react-hooks";
import {Button} from "components/Common/molecules";
import useTranslation from "contexts/Localization/useTranslation";
import {CREATE_POST, POSTS} from "apollo/requests/post";
import {ME} from "apollo/actions/user";
import {client} from "apollo";
import StyledTextarea from "./StyledTextarea";
import StyledForm from "./StyledForm";
import {USER} from "apollo/requests/user";

const PostForm = () => {
    const {t} = useTranslation();
    const [publicPost] = useMutation(CREATE_POST);
    const {data} = useQuery(ME);
    const [text, setText] = useState('');

    if (!data)
        return <></>;

    const {nickname: owner} = data.me;
    const submit = post => {
        if (post && post.text)
            publicPost({variables: {post}})
                .then(() => Promise.all([
                    client.query({query: POSTS, variables: {owner}, fetchPolicy: "network-only"}),
                    client.query({query: USER, variables: {nickname: owner}, fetchPolicy: "network-only"})
                ])).then(() => setText(''))
                    .catch(console.error);
    };

    return <StyledForm onSubmit={submit}>{({updateState}) => <>
        <StyledTextarea name="text" value={text} onChange={(e) => {
            setText(e.target.value);
            updateState(e);
        }}/>
        <Button type="submit">{t('Public')}</Button>
    </>}</StyledForm>;
};

export default React.memo(PostForm);