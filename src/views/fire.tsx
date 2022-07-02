import React, {useState, useEffect} from "react";
import {FetchOperator} from "../utils/Fetch/Fetch";

export const FireView =() => {
    const [fireInfo, setFireInfo] = useState(null)

    useEffect(() => {
        (async () => {
            const data = await new FetchOperator('fire')
            const dataRes = await data.run('GET')
        })
    })


}