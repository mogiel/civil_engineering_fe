import {FireProtectionInterface} from "types"
import {FireTableRow} from "./FireTableRow";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react'

interface Props {
    fireInfo: FireProtectionInterface[]
}

export const FireTable = (props: Props) => {
    return <>
        <TableContainer>
            <Table size='sm' variant='striped' colorScheme={'grey.500'}>
                <Thead>
                    <Tr>
                        <Th textAlign={'center'}>Klasa odporności pożarowej budynku</Th>
                        <Th textAlign={'center'}>Główna konstrukcja nośna</Th>
                        <Th textAlign={'center'}>Konstrukcja dachu</Th>
                        <Th textAlign={'center'}>Strop</Th>
                        <Th textAlign={'center'}>Ściana zewnętrzna</Th>
                        <Th textAlign={'center'}>Ściana wewnętrzna</Th>
                        <Th textAlign={'center'}>Przekrycie dachu</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.fireInfo.map((fire: FireProtectionInterface) => <FireTableRow fire={fire} key={fire.id}/>)}
                </Tbody>
            </Table>
        </TableContainer>
    </>
}
