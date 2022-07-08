import { FireProtectionInterface } from "types"
import {Tr, Td} from "@chakra-ui/react";

interface Props {
    fire: FireProtectionInterface
}

export const FireTableRow = (props: Props) => {
    return <>
        <Tr>
            <Td textAlign={'center'} ><strong>{props.fire.classBuilding}</strong></Td>
            <Td textAlign={'center'}>{props.fire.main}</Td>
            <Td textAlign={'center'}>{props.fire.roof}</Td>
            <Td textAlign={'center'}>{props.fire.ceiling}</Td>
            <Td textAlign={'center'}>{props.fire.exteriorWall}</Td>
            <Td textAlign={'center'}>{props.fire.internalWall}</Td>
            <Td textAlign={'center'}>{props.fire.cover}</Td>
        </Tr>
    </>
}