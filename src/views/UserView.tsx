import React, {useEffect, useState} from 'react';
import {UserReturn} from 'types';
import {useSelector} from "react-redux";
import {RootState} from "../components/store";
import {FetchOperator} from "../utils/Fetch/Fetch";

export const UserView = () => {
    const [content, setContent] = useState<UserReturn | null>(null);
    const {isLogged, email, role, username} = useSelector((state: RootState) => state.user)

    useEffect(() => {
        (
            async () => {
                const data = await new FetchOperator('user/info')
                const dataRes = await data.run('GET')

                if (dataRes) {
                    setContent(dataRes)
                } else {
                    setContent(null)
                }
            }
        )();
    }, []);

    return (<>
        {content ? <h1>zalogowany {content.username} o id: {content.id}</h1> : <h1>nie zalogowany</h1>}
        {isLogged ? <>
            email: {email}<br/>
            username: {username}<br/>
            pozycja: {role}
        </>
        :
        <>Nie zalogowany przez redux</>
        }

    </>);
}