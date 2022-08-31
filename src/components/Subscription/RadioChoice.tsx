import {Radio, RadioGroup, Stack} from "@chakra-ui/react";
import React, {useState} from "react";
import { GetAll } from "types";

interface Props {
    content: GetAll[]
    onChange: (value: number) => void
}

export const RadioChoice = (props:Props) => {
    const [content, setContent] = useState(props.content)
    const [value, setValue] = useState(30)

    const handleChange = (e: any) => {
        setValue(Number(e.target.value));
        props.onChange(Number(e.target.value))
    }

    return <RadioGroup value={value}>
        <Stack>
            {content.map(test => <Radio onChange={handleChange} value={test.days}>dni: {test.days}, koszt: {test.price} zł</Radio>)}
        </Stack>
    </RadioGroup>
}

