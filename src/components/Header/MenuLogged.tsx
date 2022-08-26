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

    const Delete = async (e: any) => {
        e.preventDefault()
        const data = await new FetchOperator('user')
        const dataRes = await data.run('DELETE')

        if (dataRes) {
            dispatch(setUsername(""))
            dispatch(setEmail(""))
            dispatch(setRole(""))
            dispatch(setLogged(false))
        }
    }

    return <>
        <MenuList>
            <MenuGroup title='Profile'>
                <MenuItem onClick={() => navigate('/user')}>Moje konto</MenuItem>
                <MenuItem onClick={() => navigate('/subscription')}>Subskrypcja</MenuItem>
            </MenuGroup>
            <MenuDivider/>
            <MenuGroup title='Help'>
                <MenuItem onClick={() => navigate('/about')}>O autorze</MenuItem>
                <MenuItem onClick={Delete}>Usuń konto</MenuItem>
                <MenuItem onClick={Logout}>Wyloguj</MenuItem>
            </MenuGroup>
        </MenuList>
    </>
}