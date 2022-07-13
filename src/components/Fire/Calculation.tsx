import React, {useState} from "react";
import {Button, Input, InputGroup, InputRightAddon, Select} from "@chakra-ui/react";
import {Result} from "./Result";
import {FireProtectionInterface} from "types";

interface CalculationInterface {
    valueZL: number;
    height: number;
    storey: number;
    ceiling: number;
}

interface Props {
    fireInfo: FireProtectionInterface[]
}

export const Calculation = (props: Props) => {
    const [calc, setCalc] = useState<boolean>(false)
    const [classBuild, setClassBuild] = useState<CalculationInterface>({
        valueZL: 1,
        height: 3.64,
        storey: 1,
        ceiling: 3.6,

    })

    const Calc = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCalc(true)
    }

    const changeValue = (e: any) => {
        e.preventDefault()
        setClassBuild(classBuild => ({
            ...classBuild,
            [e.target.name]: Number(e.target.value)
        }))
    }

    return (<>
            <form onSubmit={Calc}>

                <label>Kategoria zagrożenia ludzi:<br/>
                    <Select onChange={changeValue} className={"form-control"} id="valueZL" name="valueZL"
                            value={classBuild.valueZL}>
                        <option value={0}>ZL I</option>
                        <option value={1}>ZL II</option>
                        <option value={2}>ZL III</option>
                        <option value={3}>ZL IV</option>
                        <option value={4}>ZL V</option>
                    </Select>
                </label><br/>
                <label>
                    Wysokość budynku:<br/>
                    <InputGroup>
                        <Input onChange={changeValue} type={"number"} min={0.1} step={0.01} id="height" name="height"
                               value={classBuild.height}/>
                        <InputRightAddon children={'[m]'}/>
                    </InputGroup>
                </label><br/>
                <label>
                    Ilość kondygnacji:<br/>
                    <InputGroup>
                        <Input onChange={changeValue} type={"number"} min={1} step={1} id="storey" name="storey"
                               value={classBuild.storey}/>
                    </InputGroup>
                </label><br/>
                <label>
                    Wysokość do stropu pierwszej kondygnacji:<br/>
                    <InputGroup>
                        <Input onChange={changeValue} type={"number"} min={1} step={0.01} id="ceiling" name="ceiling"
                               value={classBuild.ceiling}/>
                        <InputRightAddon children={'[m]'}/>
                    </InputGroup>
                </label><br/>
                {!calc && <Button type={"submit"} colorScheme='teal'>Oblicz</Button>}
            </form>
            {calc && <hr/>}
            {calc && <Result value={classBuild} fireInfo={props.fireInfo}/>}
            {calc && <hr/>}
        </>
    )
}
