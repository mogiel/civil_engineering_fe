import React, {useState, useEffect} from "react";
import {FetchOperator} from "../utils/Fetch/Fetch";
import {FireProtectionInterface} from 'types'
import {FireTable} from "../components/Fire/FireTable";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    CircularProgress
} from "@chakra-ui/react";
import {Calculation} from "../components/Fire/Calculation";
import { ThreatsToPeople } from "../components/Fire/ThreatsToPeople";
import {Info} from "../components/Fire/Info";

export const FireView = () => {
    const [fireInfo, setFireInfo] = useState<FireProtectionInterface[] | null>(null)

    useEffect(() => {
        (async () => {
            const data = await new FetchOperator('fire')
            const dataRes = await data.run('GET')
            setFireInfo(dataRes)
        })()
    }, [])

    if (fireInfo === null) {
        return <>
            <CircularProgress isIndeterminate color='tael.300' />
        </>
    }


    return (
        <>
            <Calculation fireInfo={fireInfo}/>
            <br/>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Tablica. Klasy odporności pożarowej budynku
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <FireTable fireInfo={fireInfo}/>

                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Tablica ZL - zagrożenia ludźmi
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <ThreatsToPeople />
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Opis
                            </Box>
                            <AccordionIcon/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Info />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}