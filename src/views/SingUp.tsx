import React, {useState} from 'react';
import {Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {CreateAuth} from 'types';


export const SignupView = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [dataJSON, setDataJSON] = useState<CreateAuth>({
        username: '',
        email: '',
        password: '',
    })
    const [res, setRes] = useState(null)

    const Send = async (e: any) => {
        e.preventDefault()
        const data = await new FetchOperator('register')
        const dataRes = await data.run('POST', '', dataJSON)
        setRes(dataRes)
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
                Nazwa użytkownika:
                <Input
                    type={"text"} onChange={changeValue}
                    name={'username'}
                    id={'username'}
                /><br/><br/>
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

                </InputGroup><br/><br/>

                <Input
                    type={"submit"}
                    backgroundColor={"teal"}
                    color={"white"}
                    _hover={{
                        background: "teal.500"
                    }}
                    onClick={Send}/>
            </form>
        </>
    );
}