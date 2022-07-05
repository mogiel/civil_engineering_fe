import { FireProtectionInterface } from "types"

interface Props {
    fire: FireProtectionInterface
}

export const FireTableRow = (props: Props) => {
    return <>
        <tr>
            <td>{props.fire.classBuilding}</td>
            <td>{props.fire.main}</td>
            <td>{props.fire.roof}</td>
            <td>{props.fire.ceiling}</td>
            <td>{props.fire.exteriorWall}</td>
            <td>{props.fire.internalWall}</td>
            <td>{props.fire.cover}</td>
        </tr>
    </>
}