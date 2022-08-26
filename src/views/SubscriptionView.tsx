import {useEffect, useState} from "react";
import { Datetime } from "../components/Datetime/Datetime";
import {FetchOperator} from "../utils/Fetch/Fetch";

export const SubscriptionView = () => {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        (
            async () => {
                const data = await new FetchOperator('user/sub')
                const dataRes = await data.run('GET')

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
        </>
    }

    return <h2>Wykup subskrypcje</h2>
}