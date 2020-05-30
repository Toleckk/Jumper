import React from 'react'
import SettingsList from './SettingsList'
import Setting from './Setting'
import {useQuery} from "@apollo/react-hooks"
import {ME} from "Common/apollo/entities/user"
import {Divider} from "Common/atoms"
import ProfileInformation from "./organisms/ProfileInformation"
import LoginData from "./organisms/LoginData"
import Privacy from './organisms/Privacy'
import {Redirect} from "react-router-dom"

const Settings = () => {
    const {data: {me}} = useQuery(ME)

    if (!me)
        return <Redirect to="/"/>

    return (
        <>
            <SettingsList>
                <Setting>
                    <ProfileInformation user={me}/>
                </Setting>
                <Divider/>
                <Setting>
                    <Privacy user={me}/>
                </Setting>
                <Divider/>
                <Setting>
                    <LoginData user={me}/>
                </Setting>
                <Divider/>
            </SettingsList>
        </>
    )
}

export default React.memo(Settings)