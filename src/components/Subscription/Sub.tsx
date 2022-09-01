import React, {useEffect, useState} from "react";
import {FetchOperator} from "../../utils/Fetch/Fetch";
import {GetAll} from 'types'
import {CircularProgress, FormControl, FormLabel, Input, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import {RadioChoice} from "./RadioChoice";
import {createSearchParams, useNavigate} from "react-router-dom";

export const SubChecks = () => {
    const [content, setContent] = useState<GetAll[] | null>()
    const [dateSend, setDateSend] = useState<number>(60)

    const navigate = useNavigate();

    useEffect(() => {
        (
            async () => {
                const data = await new FetchOperator('subs')
                const dataRes: GetAll[] = await data.run('GET')

                if (dataRes) {
                    setContent(dataRes)
                } else {
                    setContent(null)
                }

            }

        )();
    }, []);

    const Send = async (e: any) => {
        e.preventDefault()
        const data = await new FetchOperator('subs/buy')
        const dataRes = await data.run('POST', '', {date: dateSend})

        if (dataRes) {
            navigate({
                pathname: "/bank",
                search: createSearchParams({
                    id: dataRes.id,
                    price: dataRes.price
                }).toString()
            })

        }


    }

    if (!content) {
        return <CircularProgress isIndeterminate color='tael.300'/>
    }

    const handleChange = (newValue: number) => {
        setDateSend(newValue)
    }

    return <>
        <FormControl>
            <FormLabel>
                <RadioChoice content={content} onChange={handleChange} days={dateSend}/>
                <Input
                    type={"submit"}
                    backgroundColor={"teal"}
                    color={"white"}
                    _hover={{
                        background: "teal.500"
                    }}
                    onClick={Send}/>
            </FormLabel>
        </FormControl>
    </>
}