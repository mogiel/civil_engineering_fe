import React from "react";
import {
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
} from '@chakra-ui/react'
import {FetchOperator} from "../../utils/Fetch/Fetch";
import {setEmail, setLogged, setRole, setUsername} from "../features/user/user-slice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const MenuLogged = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const Logout = async (e: any) => {
        e.preventDefault()
        const data = await new FetchOperator('user/logout')
        const dataRes = await data.run('POST')
        if (dataRes.ok) {
            dispatch(setUsername(""))
            dispatch(setEmail(""))
            dispatch(setRole(""))
            dispatch(setLogged(false))
        }

        await navigate('/main')
    }

    return <>
        <MenuList>
            <MenuGroup title='Profile'>
                <MenuItem onClick={() => navigate('/user')}>Moje konto</MenuItem>
                <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider/>
            <MenuGroup title='Help'>
                <MenuItem onClick={() => navigate('/about')}>O autorze</MenuItem>
                <MenuItem onClick={Logout}>Wyloguj</MenuItem>
            </MenuGroup>
        </MenuList>
    </>
}