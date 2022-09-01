import React, {useState} from 'react';
import {Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {LoginAuth} from 'types';
import {useDispatch} from "react-redux";
import {setEmail, setLogged, setRole, setUsername} from "../components/features/user/user-slice";

export const LoginView = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [dataJSON, setDataJSON] = useState<LoginAuth>({
        email: 'a@b.c2',
        password: 'admin123',
    })

    const dispatch = useDispatch()


    const Send = async (e: any) => {
        e.preventDefault()
        const data = await new FetchOperator('user/login')
        const dataRes = await data.run('POST', '', dataJSON)

        if (dataRes.ok) {
            const dataGetRes = await fetch('http://localhost:3001/user/login', {
                credentials: 'include',
            })
                .then((res) => res.json());
            dispatch(setUsername(dataGetRes.username))
            dispatch(setEmail(dataGetRes.email))
            dispatch(setRole(dataGetRes.position))
            dispatch(setLogged(true))
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
                    value={dataJSON.email}
                    id={'email'}
                /><br/><br/>
                Hasło:
                <InputGroup>
                    <Input
                        type={showPassword ? "text" : "password"}
                        onChange={changeValue}
                        name={'password'}
                        value={dataJSON.password}
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
        </>
    );
}