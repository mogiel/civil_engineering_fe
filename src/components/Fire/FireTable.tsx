import { FireProtectionInterface } from "types"
import {FireTableRow} from "./FireTableRow";

interface Props {
    fireInfo: FireProtectionInterface[]
}

export const FireTable = (props: Props) => {
    return<>
        <table>
            <thead>
            <tr>
                <th>Klasa odporności pożarowej budynku</th>
                <th>Główna konstrukcja nośna</th>
                <th>Konstrukcja dachu</th>
                <th>Strop</th>
                <th>Ściana zewnętrzna</th>
                <th>Ściana wewnętrzna</th>
                <th>Przekrycie dachu</th>
            </tr>
            </thead>
            <tbody>
            {props.fireInfo.map((fire:FireProtectionInterface, index:number) => <FireTableRow fire={fire} key={fire.id}/>)}
            </tbody>
        </table>
    </>
}
