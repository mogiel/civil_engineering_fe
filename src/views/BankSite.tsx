import {useSearchParams} from "react-router-dom";

interface Props {
    id: string;
    price: number;
}

export const BankSite = () => {
    const [params, setParams] = useSearchParams()
    const id = params.get("id")
    const price = params.get("price")

    return <>
        <h1>Witamy w banku</h1>
        <p>Opłać wybraną subskrypcję. Nie ma obawy, nie zaimplementowano prawdziwej obsługi.</p>
        <p>Twój id: {id}</p>
        <p>Do zapłaty: {price}</p>
    </>
}