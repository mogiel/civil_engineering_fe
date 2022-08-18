import React, {useEffect, useState} from 'react';
import {UserReturn} from 'types';

export const UserView = () => {
    const [content, setContent] = useState<UserReturn | null>(null);

    useEffect(() => {
        (
            async () => {
                const data = await fetch('http://localhost:3001/user/login', {
                    method: 'GET',
                    credentials: 'include',
                })
                    .then((res) => res.json());

                if (data) {
                    setContent(data)
                } else {
                    setContent(null)
                }

                console.log(data)

            }
        )();
    }, []);

    return (<>
        {content ? <h1>zalogowany {content.username} o id: {content.id}</h1> : <h1>nie zalogowany</h1>}
    </>);
}