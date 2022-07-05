
import {FetchOperator} from "../utils/Fetch/Fetch";


export const AboutView = () => {

    const downloadFile = async (value: string) => {

        const data = await new FetchOperator('about/download')
        return await data.pdf(value)
    };

    return (<>
        <h2>Szukam pracy</h2>

        <button onClick={() => downloadFile('Mateusz Mogielski CV')}>Pobierz CV</button>
    </>)
}