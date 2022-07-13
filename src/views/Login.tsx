import React, {useState} from 'react';
import {Button, Input, InputGroup, InputRightAddon, useClipboard, Text} from "@chakra-ui/react";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {LoginAuth} from 'types';


export const LoginView = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [dataJSON, setDataJSON] = useState<LoginAuth>({
        email: '',
        password: '',
    })
    // todo: skasować na produkcji oraz usunąć przekazywanie tokenów z backend
    const [token, setToken] = useState('')
    const { hasCopied, onCopy } = useClipboard(token)

    const Send = async (e: any) => {
        e.preventDefault()
        const data = await new FetchOperator('user/login')
        const dataRes = await data.run('POST', '', dataJSON)


        if (dataRes.token) {
            setToken(dataRes.token)
        } else {
            setToken('')
        }

    }

    const changeValue = (e: any) => {
        e.preventDefault()
        setDataJSON(setData => ({
            ...setData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <form>
                Email:
                <Input
                    type={"email"} onChange={changeValue}
                    name={'email'}
                    id={'email'}
                /><br/><br/>
                Hasło:
                <InputGroup>
                    <Input
                        type={showPassword ? "text" : "password"}
                        onChange={changeValue}
                        name={'password'}
                        id={'password'}
                    />
                    <InputRightAddon
                        onClick={() => setShowPassword(!showPassword)} children={showPassword ? 'ukryj' : 'pokaż'}
                        cursor={'pointer'}
                        width={'120px'}
                        justifyContent={'center'}
                    />

                </InputGroup>
                <br/><br/>
                <Input
                    type={"submit"} onClick={Send} value={'Zaloguj'}
                    backgroundColor={"teal"}
                    color={"white"}
                    _hover={{
                        background: "teal.500"
                    }}/>
            </form>
            {token ? <><Text>Twój token:<br/>{token}</Text><Button onClick={onCopy} value={token}>Pobierz token</Button></> : null}
        </>
    );
}