import React, {useEffect, useState} from "react";
import {FireProtectionInterface} from "types";
import {InfoResult} from "./InfoResult";

interface Props {
    value: {
        valueZL: number;
        height: number;
        storey: number;
        ceiling: number;
    }
    fireInfo: FireProtectionInterface[]
}

export const Result = (props: Props) => {
    const [result, setResult] = useState<FireProtectionInterface | null>(null)
    const [resultReduction, setResultReduction] = useState<FireProtectionInterface | null>(null)

    useEffect(() => {
        let groupHeight: number

        if (props.value.height <= 12 && props.value.storey <= 4) {
            groupHeight = 0
        } else if (props.value.height <= 25 && props.value.storey <= 9) {
            groupHeight = 1
        } else if (props.value.height <= 55 && props.value.storey <= 18) {
            groupHeight = 2
        } else {
            groupHeight = 3
        }

        const table = [["B", "B", "C", "D", "C"],
            ["B", "B", "B", "C", "B"],
            ["B", "B", "B", "B", "B"],
            ["A", "A", "A", "B", "A"]]

        const resultMain = table[groupHeight][props.value.valueZL]
        const resultMainObj = props.fireInfo.filter((key => key.classBuilding === resultMain))[0]

        let resultMainReduction: string | null

        if (props.value.storey <= 2 && props.value.height <= 12 && props.value.valueZL <= 2) {
            if (props.value.storey === 1 && props.value.ceiling <= 9) {
                resultMainReduction = "D"
            }
            if (props.value.storey === 2 && props.value.ceiling <= 9) {
                if (props.value.valueZL <= 1) {
                    resultMainReduction = "C"
                } else {
                    resultMainReduction = "D"
                }
            }
        } else {
            resultMainReduction = null
        }

        const resultMainReductionObj = props.fireInfo.filter((key => key.classBuilding === resultMainReduction))[0]

        setResult(resultMainObj)
        setResultReduction(resultMainReductionObj)

    }, [props.fireInfo, props.value.ceiling, props.value.height, props.value.storey, props.value.valueZL])

    return (<>
        {result ? <InfoResult info={result}/> : 'błąd obliczeń, spróbuj później'}
        {resultReduction ? <><br/><strong>Można obniżyć do:</strong><br /><InfoResult info={resultReduction} /></> : 'Nie można obniżyć'}
    </>)
}