import React, {useEffect, useState} from "react";
import {FetchOperator} from "../../utils/Fetch/Fetch";
import {GetAll} from 'types'
import {CircularProgress, FormControl, FormLabel, Input, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import {RadioChoice} from "./RadioChoice";

export const SubChecks = () => {
    const [content, setContent] = useState<GetAll[] | null>()
    const [dateSend, setDateSend] = useState<number | null>(null)

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
        await data.run('POST', '', {date: dateSend})
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
                <RadioChoice content={content} onChange={handleChange}/>
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