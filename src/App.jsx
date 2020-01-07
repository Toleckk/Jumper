import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {ME} from "Common/apollo/queries/user";
import {Loader} from "Common/molecules";
import {useTranslation} from "Common/contexts/Localization";
import Routes from "./Routes";

const App = () => {
    const {data, loading} = useQuery(ME);
    const {loaded} = useTranslation();

    return loading || !data || !loaded ? <Loader/> : <Routes/>;
};

export default React.memo(App);