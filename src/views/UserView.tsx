import React, {useEffect, useState} from 'react';
import { Input } from '@chakra-ui/react';
import { UserReturn } from 'types';

export const UserView = () => {
    const [content, setContent] = useState<UserReturn | null>(null);

    const [token, setToken] = useState('')

    useEffect(() => {
        (
            async () => {
                await fetch('http://localhost:3001/user/login', {
                    credentials: 'include',
                });
            }
        )();
    });

    const Send = async (e: any) => {
        e.preventDefault()
        const data = await fetch('http://localhost:3001/user/login', {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((res) => res.json());

        setContent(data)


        if (data) {
            setContent(data)
        } else {
            setContent(null)
        }

    }


    return (<>
        {content ? <h1>zalogowany {content.username} o id: {content.id}</h1> : <h1>nie zalogowany</h1>}
        <br/>
        <h1>Wklej token ze strony logowania</h1>
        <Input type={"text"} onChange={e => setToken(e.target.value)} value={token}/>
        <Input
        type={"submit"}
        backgroundColor={"teal"}
        color={"white"}
        _hover={{
            background: "teal.500"
        }}
        onClick={Send}/>
    </>);
}