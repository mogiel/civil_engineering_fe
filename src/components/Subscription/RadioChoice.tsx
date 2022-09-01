import {Radio, RadioGroup, Stack} from "@chakra-ui/react";
import React, {useState} from "react";
import { GetAll } from "types";

interface Props {
    content: GetAll[]
    days: number
    onChange: (value: number) => void
}

export const RadioChoice = (props:Props) => {
    const content = props.content
    const [value, setValue] = useState(props.days)

    const handleChange = (e: any) => {
        setValue(Number(e.target.value));
        props.onChange(Number(e.target.value))
    }

    return <RadioGroup value={value}>
        <Stack>
            {content.map(test => <Radio key={test.id} onChange={handleChange} value={test.days}>dni: {test.days}, koszt: {test.price} zł</Radio>)}
        </Stack>
    </RadioGroup>
}

