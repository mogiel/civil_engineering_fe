import {useNavigate, useSearchParams} from "react-router-dom";
import {Button} from "@chakra-ui/react";
import React from "react";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {setRole} from "../components/features/user/user-slice";
import {useDispatch} from "react-redux";

export const BankSite = () => {
    const [params, setParams] = useSearchParams()
    const id = params.get("id")
    const price = params.get("price")

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const Send = async (e: any) => {
        e.preventDefault()
        await new FetchOperator('subs').run('POST', '', {id, price})

        dispatch(setRole('userSubscription'))
        navigate("/main")
    }

    return <>
        <h1>Witamy w banku</h1>
        <p>Opłać wybraną subskrypcję. Nie ma obawy, nie zaimplementowano prawdziwej obsługi.</p>
        <p>Twój id: {id}</p>
        <p>Do zapłaty: {price} zł</p>
        <Button type={"submit"} colorScheme='teal' onClick={Send}>Kup</Button>
    </>
}