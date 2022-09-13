import {useEffect, useState} from "react";
import { Sub } from "types";
import { Datetime } from "../components/Datetime/Datetime";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {SubChecks} from "../components/Subscription/Sub";

const SUB_LAST_DAY = 14

const dateCheck = (subs_term:Date, days: number = SUB_LAST_DAY): boolean => {
    if (subs_term === null) return false
    const dateNow = new Date()
    const dateSub = new Date(subs_term)
    dateNow.setDate(dateNow.getDate() + days)
    return dateNow > dateSub;
}


export const SubscriptionView = () => {
    const [content, setContent] = useState<Sub | null>(null);

    useEffect(() => {
        (
            async () => {
                const data = await new FetchOperator('user/sub')
                const dataRes: Sub = await data.run('GET')

                if (dataRes) {
                    setContent(dataRes)
                } else {
                    setContent(null)
                }
            }
        )();
    }, []);

    if (content) {
        return <>
            {content.sub.subs_term ? <p>Twoja subskrypcja obowiązuje do <strong><Datetime time={content.sub.subs_term}/></strong></p> : <p>Nie posiadasz żadnej subskrypcji</p>}
            {content.sub.free_day && <p>Możesz wykorzystać darmowy okres </p>}
            {dateCheck(content.sub.subs_term) ? <SubChecks /> : <p>Subskrypcję można przedłużyć {SUB_LAST_DAY} dni przed terminem</p>}
        </>
    }

    return <h2>Wykup subskrypcje</h2>
}