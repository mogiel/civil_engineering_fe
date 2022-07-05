// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState, useEffect} from "react";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {FireProtectionInterface} from 'types'
import {FireTable} from "../components/Fire/FireTable";

export const FireView =() => {
    const [fireInfo, setFireInfo] = useState<FireProtectionInterface[] | null>(null)

    useEffect(() => {
        (async () => {
            const data = await new FetchOperator('fire')
            const dataRes = await data.run('GET')
            setFireInfo(dataRes)
        })()
    },[])

    if (fireInfo === null) {
        return <>
            <h2>Problem</h2>
        </>
    }

    return (
        <>
            <FireTable fireInfo={fireInfo}/>
        </>
    )
}