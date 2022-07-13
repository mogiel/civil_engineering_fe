import React, {useEffect, useState} from 'react';
import { Input } from '@chakra-ui/react';

export const UserView = () => {
    const [name, setName] = useState('');

    const [token, setToken] = useState('')

    useEffect(() => {
        (
            async () => {
                await fetch('http://localhost:3001/user/login', {
                    credentials: 'include',
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzNTVlOTI2LWM5NzItNDNkMy05NDk4LWJkMDMyNjc0MTM4ZCIsImlhdCI6MTY1NzcwMjU2MiwiZXhwIjoxNjU3Nzg4OTYyfQ.9j0c4EeifxxBlAAch6ewRN7Em4f7OgD2DHWkYOxZL8E',
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
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

        if (data) {
            setName(data.username)
        } else {
            setToken('')
        }

    }


    return (<>
        {name ? <h1>zalogowany</h1> : <h1>nie zalogowany</h1>}
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