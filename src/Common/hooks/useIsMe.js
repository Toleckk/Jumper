import {useCallback} from 'react';
import {useQuery} from "@apollo/react-hooks"
import {ME} from "../apollo/entities/user"

const useIsMe = () => {
    const {data: me} = useQuery(ME);

    return useCallback(user => {
        if (!user || !me || !me.me)
            return false;

        if (typeof user === 'string')
            return user === me.me.nickname;

        return user.nickname === me.me.nickname;
    }, [me]);
}

export default useIsMe;